// src/components/NotFound/NotFound.tsx
import React from 'react';
import './NotFound.css';

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;