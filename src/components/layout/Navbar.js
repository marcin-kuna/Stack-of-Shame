import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-info mb-5">
            {/* <img src={SOS} alt="logo" className="logo"/> */}
            <div className="pseudo-logo">
                <span className="d-block text-white h2">S . . . </span>
                <span className="d-block text-white h2">O - - - </span>
                <span className="d-block text-white h2">S . . . </span>
            </div>
            <span className="navbar-brand mb-0 h1 mx-auto">Stack of Shame</span>
            {/* <hr className="navbar-hr"/> */}
        </nav>
    )
}

export default Navbar