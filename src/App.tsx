import React, { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar/ui/Calendar';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<string>('Calendar');

    return (
        <Layout activePage={activePage} setActivePage={setActivePage}>
            {activePage === 'Calendar' ? (
                <div className="calendar-page">
                    <Calendar />
                </div>
            ) : (
                <NotFound />
            )}
        </Layout>
    );
}

export default App;