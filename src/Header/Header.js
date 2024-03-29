import React from 'react';
import './Header.css';

import Logo from './Components/Logo';
import Navbar from './Components/Navbar';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Navbar />
        </div>
    )
}

export default Header;