import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './common-module.css';

const Header = (props) => {
    const activeStyle = { color: '#fff', textDecoration: 'none' }
    const { loggedIn } = props;
    return loggedIn ? (
        <nav className='header'>
            <p className='nav-home'><NavLink to='/' activeStyle={activeStyle}>Oxlade</NavLink></p>
            <ul className='nav-links'>
                <li className='nav-links-item'><NavLink to='/products' activeStyle={activeStyle}>Buy Products</NavLink></li>
                <li className='nav-links-item'><NavLink to='/create' activeStyle={activeStyle}>Create Products</NavLink></li>
                <li className='nav-links-item'><NavLink to='/products/mine' activeStyle={activeStyle}>View my Products</NavLink></li>
            </ul>
        </nav>
    ) : null;
}

const mapStateToProps = state => ({
    loggedIn: state.logIn.loggedIn,
})
export default connect(mapStateToProps)(Header);
