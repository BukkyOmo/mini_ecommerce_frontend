import React from 'react';
import { Link } from 'react-router-dom';
import './home-module.css';
import Button from 'react-bootstrap/Button';

const Homepage = () => {
    return (
        <div className='banner'>
            <h1 className='banner-item'>Welcome to Oxlade Stores</h1>
            <Button variant="primary"><Link to='/signin'>Shop Now</Link></Button>
        </div>
    )
}

export default Homepage;
