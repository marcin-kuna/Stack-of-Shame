import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar text-white mb-5">
            <Link to="/">
                <div className="pseudo-logo">
                    <span className="d-block text-white h2">S . . . </span>
                    <span className="d-block text-white h2">O - - - </span>
                    <span className="d-block text-white h2">S . . . </span>
                </div>
            </Link>
            <span className="navbar-brand mb-0 h1 mx-auto">Stack of Shame</span>
        </nav>
    )
}

export default Navbar;