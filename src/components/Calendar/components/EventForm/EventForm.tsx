import React, { useState, useEffect } from 'react';
import { EventInput } from '@fullcalendar/core';
import './EventForm.css';
import { IoMdTime } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface EventFormProps {
    selectedDate: Date | null;
    selectedEvent: EventInput | null;
    onSubmit: (event: EventInput) => void;
    onDelete?: (eventId: string) => void;
    onCancel: () => void;
}

const EventForm: React.FC<EventFormProps> = ({
                                                 selectedDate,
                                                 selectedEvent,
                                                 onSubmit,
                                                 onDelete,
                                                 onCancel
                                             }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        if (selectedEvent) {
            setTitle(selectedEvent.title as string);
            const eventDate = new Date(selectedEvent.start as string);
            setDate(formatDate(eventDate));
            setTime(formatTime(eventDate));
            setNotes(selectedEvent.extendedProps?.notes || '');
        } else if (selectedDate) {
            setDate(formatDate(selectedDate));
            setTime(formatTime(selectedDate));
        }
    }, [selectedEvent, selectedDate]);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-GB');
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const [day, month, year] = date.split('/');
        const [hours, minutes] = time.split(':');
        const eventDate = new Date(+year, +month - 1, +day, +hours, +minutes);

        const event: EventInput = {
            id: selectedEvent?.id || String(new Date().getTime()),
            title,
            start: eventDate,
            extendedProps: { notes },
        };
        onSubmit(event);
    };

    return (
        <div className="event-form-overlay">
            <form className="event-form" onSubmit={handleSubmit}>
                <div className="form-header">
                    <IoMdCloseCircleOutline size={24} className="close-button" onClick={onCancel} />
                </div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="event name"
                    required
                />
                <div className="input-with-icon">
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="event date"
                        required
                    />
                    <span className="input-icon"><FaRegCalendarAlt size={18}/></span>
                </div>
                <div className="input-with-icon">
                    <input
                        type="text"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        placeholder="event time"
                        required
                    />
                    <span className="input-icon"><IoMdTime size={24}/></span>
                </div>
                <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="notes"
                />
                <div className="form-actions">
                    <button
                        className="cancel-button"
                        onClick={onCancel}
                    >
                        {selectedEvent ? 'DISCARD' : 'Cancel'}
                    </button>
                    <button
                        className="save-button"
                    >
                        {selectedEvent ? 'EDIT' : 'Save'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventForm;