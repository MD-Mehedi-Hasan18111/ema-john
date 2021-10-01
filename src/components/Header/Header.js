import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/order">Order Review</Link></li>
                <li><Link to="/inventory">Manage Inventory</Link></li>
            </nav>
        </div>
    );
};

export default Header;