import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/" >Registration</Link>
            <Link to="/login" >Log In</Link>
            <Link to="/google" >Google Login</Link>
            <Link to="/github" >Github Login</Link>
        </nav>
    );
};

export default Header;