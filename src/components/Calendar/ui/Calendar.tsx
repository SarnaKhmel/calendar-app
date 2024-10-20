import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput, DateSelectArg, EventClickArg } from '@fullcalendar/core';
import EventForm from '../components/EventForm/EventForm';
import './Calendar.css';

const Calendar: React.FC = () => {
    const calendarRef = useRef<FullCalendar>(null);

    const [events, setEvents] = useState<EventInput[]>([]);
    const [showEventForm, setShowEventForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<EventInput | null>(null);

    const handleDateSelect = (selectInfo: DateSelectArg) => {
        const adjustedDate = new Date(selectInfo.start.getTime() - selectInfo.start.getTimezoneOffset() * 60000);
        setSelectedDate(adjustedDate);
        setShowEventForm(true);
    };

    const handleEventClick = (clickInfo: EventClickArg) => {
        setSelectedEvent(clickInfo.event.toPlainObject());
        setShowEventForm(true);
    };

    const handleEventAdd = (event: EventInput) => {
        setEvents([...events, event]);
        setShowEventForm(false);
    };

    const handleEventEdit = (updatedEvent: EventInput) => {
        setEvents(events.map(event =>
            event.id === updatedEvent.id ? updatedEvent : event
        ));
        setShowEventForm(false);
    };

    const handleEventDelete = (eventId: string) => {
        setEvents(events.filter(event => event.id !== eventId));
        setShowEventForm(false);
    };

    return (
        <div className="calendar">
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                events={events}
                select={handleDateSelect}
                eventClick={handleEventClick}
                nowIndicator={true}
                slotMinTime="09:00:00"
                slotMaxTime="20:00:00"
                timeZone='local'
            />
            {showEventForm && (
                <EventForm
                    selectedDate={selectedDate}
                    selectedEvent={selectedEvent}
                    onSubmit={selectedEvent ? handleEventEdit : handleEventAdd}
                    onDelete={handleEventDelete}
                    onCancel={() => setShowEventForm(false)}
                />
            )}
        </div>
    );
};

export default Calendar;