import React from "react";

const Register = () => {
    return (
        <div className="login">
            <div className="logo" onClick={() => location.href="/"}>BUILD.</div>
            <form className="build-form">
                <div className="field-name">
                    <div className="inter-large-title">Username</div>
                </div>
                <input required type="text" placeholder="" />
                <div className="field-name">
                    <div className="inter-large-title">Email</div>
                </div>
                <input required type="email" placeholder="" />
                <div className="field-name">
                    <div className="inter-large-title">Password</div>
                </div>
                <input required type="password" placeholder="" />
                <button className="build-buttons">Register</button>
            </form>
        </div>
    );
}

export default Register;