import React from 'react';

import './Components.css'; // Optional: for styling

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Kisal Company. All rights reserved.</p>
        </footer>
    );
};


export default Footer;