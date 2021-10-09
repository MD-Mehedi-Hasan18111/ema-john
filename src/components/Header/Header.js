import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/order">Order Review</Link></li>
                <li><Link to="/inventory">Manage Inventory</Link></li>
                {
                    user?.displayName && <span style={{ color: 'red', fontWeight: 'bold', border: '1px solid red', padding: '5px 10px' }}>{user.displayName}</span>
                }
                &nbsp;&nbsp;
                {
                    user?.email ? <button onClick={logOut} className="addBtn">Sing Out</button> : <li><Link to="/login">Log In</Link></li>
                }
            </nav>
        </div>
    );
};

export default Header;