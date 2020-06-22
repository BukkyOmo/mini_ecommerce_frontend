import React from 'react';
import { Link } from 'react-router-dom';
import './home-module.css';

const Homepage = () => {
    return (
        <div className='banner'>
            <h1 className='banner-item'>Welcome to Oxlade Stores</h1>
            <button className='banner-item btn' type='button'><Link to='/signin'>Shop Now</Link></button>
        </div>
    )
}

export default Homepage;
