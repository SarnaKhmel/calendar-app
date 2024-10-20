// src/components/SideBar/ui/SideBar.tsx
import React from 'react';
import './SideBar.css';
import { SideBarProps, MenuItem } from '../types/types';
import { Home, BarChart2, Inbox, Package, FileText, Users, MessageSquare, Calendar, HelpCircle, Settings } from 'lucide-react';

const menuItems: MenuItem[] = [
    { icon: Home, label: 'Home' },
    { icon: BarChart2, label: 'Dashboard' },
    { icon: Inbox, label: 'Inbox' },
    { icon: Package, label: 'Products' },
    { icon: FileText, label: 'Invoices' },
    { icon: Users, label: 'Customers' },
    { icon: MessageSquare, label: 'Chat Room' },
    { icon: Calendar, label: 'Calendar' },
    { icon: HelpCircle, label: 'Help Center' },
    { icon: Settings, label: 'Settings' },
];

const SideBar: React.FC<SideBarProps> = ({ onItemClick, activePage }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">IMPEKABLE</div>
            <nav className="sidebar-menu">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`sidebar-item ${activePage === item.label ? 'active' : ''}`}
                        onClick={() => onItemClick(item.label)}
                    >
                        <item.icon className="sidebar-icon" />
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default SideBar;