import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const NavBar = () => {
    const {currentUser, logout} = useContext(AuthContext);

    let button;
    let buttonTwo;
    const handlePress = async e =>
    {
        try
        {
            await logout();
        }
        catch(ex)
        {
            console.log(ex);
        }
    }
    if(currentUser!=null)
    {
        button = (<button className="build-buttons" onClick={handlePress} >Log out</button>);
        buttonTwo = (<button className="build-buttons" onClick={() => location.href="/my-profile"}>My Profile</button>);
    }
    else
    {
        buttonTwo = (<button className="build-buttons" onClick={() => location.href="/login"}>Log in</button>);
        button = (<button className="build-buttons" onClick={() => location.href="/register"}>Sign Up</button>)
    }
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo" onClick={() => location.href="/"}>BUILD.</div>
                <div className="buttons">
                    {buttonTwo}
                    {button}
                </div>
            </div>
        </div>
    );
}

export default NavBar;