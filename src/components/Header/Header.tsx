import React from 'react';
import { Search, Settings, MessageSquare, Bell } from 'lucide-react';
import './Header.css';
import userIcon from '../../images/icon.png';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="search-bar">
                <Search className="search-icon" />
                <input type="text" placeholder="Search transactions, invoices or help" />
            </div>
            <div className="user-actions">
                <button className="icon-button"><Settings /></button>
                <button className="icon-button"><MessageSquare /></button>
                <button className="icon-button">
                    <Bell />
                    <span className="notification-badge">1</span>
                </button>
                <div className="user-info">
                    <span className="user-name">John Doe</span>
                    <img src={userIcon} alt="User avatar" className="user-avatar" />
                </div>
            </div>
        </header>
    );
};

export default Header;