import React from 'react';
import SideBar from '../SideBar/ui/SideBar';
import Header from '../Header/Header';
import './Layout.css';

interface LayoutProps {
    children: React.ReactNode;
    activePage: string;
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, setActivePage }) => {
    const handleItemClick = (item: string) => {
        console.log(`Clicked on ${item}`);
        setActivePage(item);
    };

    return (
        <div className="layout">
            <SideBar onItemClick={handleItemClick} activePage={activePage} />
            <div className="main-content">
                <Header />
                <main className="content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;