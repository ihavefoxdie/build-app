import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo-navbar" onClick={() => location.href="/"}>BUILD.</div>
                <div className="buttons">
                    <button className="build-buttons">My Profile</button>
                    <button className="build-buttons" onClick={() => location.href="/login"}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;