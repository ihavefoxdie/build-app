import React from "react";

const Login = () => {
    return (
        <div className="login">
            <h1 className="logo" onClick={() => location.href="/"}>BUILD.</h1>
            <form className="build-form">
                <div className="small-margin">
                    <h6 className="montserrat-small-title">Username</h6>
                </div>
                <input required type="text" placeholder="" />
                <div className="small-margin">
                    <h6 className="montserrat-small-title">Password</h6>
                </div>
                <input required type="password" placeholder="" />
                <button className="build-buttons">Login</button>
            </form>
        </div>
    );
}

export default Login;