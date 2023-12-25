import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [inputs, setInputs] = useState(
    {
        login:"",
        password:"",
    });

    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleChange = e =>
    {
        setInputs(previous => 
        (
            {
                ...previous, [e.target.name]: e.target.value
            }
        ));
    }

    console.log(inputs);

    const handleSubmit = async e =>
    {
        e.preventDefault();
        
        if(inputs.password.length === 0 || inputs.login.length === 0)
        {
            setError("Fields cannot be empty.");
            return;
        }
        try
        {
            const response = await axios.post("/api/auth/login", inputs);
            console.log(response);
            //navigate("/my-profile");
        }
        catch(ex)
        {
            console.log(ex);
            setError(ex.response.data);
            //alert(ex.message + "\n" + ex.response.data);
        }
    }


    return (
        <div className="login">
            <div className="logo" onClick={() => location.href="/"}>BUILD.</div>
            <form className="build-form">
                <div className="field-name">
                    <div className="inter-large-title" >Login</div>
                </div>
                <input required type="text" placeholder="" onChange={handleChange} name="login"/>
                <div className="field-name">
                    <div className="inter-large-title" >Password</div>
                </div>
                <input required type="password" placeholder="" onChange={handleChange} name="password"/>
                <button className="build-buttons" onClick={handleSubmit}>Sign In</button>
                {error && <p className="inter-medium-title" style={{ color: 'rgb(255, 0, 0)', alignSelf: "center" }}>{error}</p>}
            </form>
        </div>
    );
}

export default Login;