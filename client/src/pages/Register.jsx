import React from "react";

const Register = () => {
    return (
        <div className="login">
            <h1 className="logo" onClick={() => location.href="/"}>BUILD.</h1>
            <form className="build-form">
                <div className="small-margin">
                    <h6 className="inter-small-title">Username</h6>
                </div>
                <input required type="text" placeholder="" />
                <div className="small-margin">
                    <h6 className="inter-small-title">Email</h6>
                </div>
                <input required type="email" placeholder="" />
                <div className="small-margin">
                    <h6 className="inter-small-title">Password</h6>
                </div>
                <input required type="password" placeholder="" />
                <button className="build-buttons">Register</button>
            </form>
        </div>
    );
}

export default Register;