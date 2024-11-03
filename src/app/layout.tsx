// src/app/layout.tsx

import React from 'react';
import './styles/globals.css'; // Make sure this line is present

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
};

export default Layout;
