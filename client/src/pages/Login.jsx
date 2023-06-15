import React from "react";

const Login = () => {
    return (
        <div className="login">
            <div className="logo" onClick={() => location.href="/"}>BUILD.</div>
            <form className="build-form">
                <div className="field-name">
                    <div className="inter-large-title">Username/Email</div>
                </div>
                <input required type="text" placeholder="" />
                <div className="field-name">
                    <div className="inter-large-title">Password</div>
                </div>
                <input required type="password" placeholder="" />
                <button className="build-buttons">Sign In</button>
            </form>
        </div>
    );
}

export default Login;