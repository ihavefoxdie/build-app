import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState(
    {
        login:"",
        email:"",
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
        
        if(inputs.email.length === 0 || inputs.password.length === 0 || inputs.login.length === 0)
        {
            setError("Fields cannot be empty.");
            return;
        }
        try
        {
            const response = await axios.post("api/auth/register", inputs);
            console.log(response);
            navigate("/login");
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
                    <div className="inter-large-title">Username</div>
                </div>
                <input required="required" type="text" placeholder="" name="login" onChange={handleChange}/>
                <div className="field-name">
                    <div className="inter-large-title">Email</div>
                </div>
                <input required type="email" placeholder="" name="email" onChange={handleChange}/>
                <div className="field-name">
                    <div className="inter-large-title">Password</div>
                </div>
                <input required type="password" placeholder="" name="password" onChange={handleChange}/>
                <button className="build-buttons" onClick={handleSubmit}>Register</button>
                {error && <p className="inter-medium-title" style={{ color: 'rgb(255, 0, 0)', alignSelf: "center" }}>{error}</p>}
            </form>
        </div>
    );
}

export default Register;