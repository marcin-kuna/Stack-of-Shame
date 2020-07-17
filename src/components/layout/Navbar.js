import React from 'react';
import { Link } from 'react-router-dom';
import ToStack from './ToStack';
import Logo from '../../img/logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar text-white mb-5">
            <Link to="/">
                <img src={Logo} alt="" className="logo"/>
            </Link>
            <span className="navbar-brand mb-0 h1 mx-auto">Stack of Shame</span>
        </nav>
    )
}

export default Navbar;