import React from 'react';
import { NavLink } from 'react-router-dom';
import './common-module.css';

const Header = () => {
    const activeStyle = { color: '#fff', textDecoration: 'none' }

    return (
        <nav className='header'>
            <p className='nav-home'><NavLink to='/' activeStyle={activeStyle}>Oxlade</NavLink></p>
            <ul className='nav-links'>
                <li className='nav-links-item'><NavLink to='/products' activeStyle={activeStyle}>Buy Products</NavLink></li>
                <li className='nav-links-item'><NavLink to='/create' activeStyle={activeStyle}>Create Products</NavLink></li>
                <li className='nav-links-item'><NavLink to='/products/mine' activeStyle={activeStyle}>View my Products</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header;
