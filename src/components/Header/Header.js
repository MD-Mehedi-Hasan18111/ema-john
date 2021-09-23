import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <li><a href="/home">Shop</a></li>
                <li><a href="/home">Order Review</a></li>
                <li><a href="/home">Manage Inventory</a></li>
            </nav>
        </div>
    );
};

export default Header;