import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import RandomImage from "../images/randomImage.png";
import { AuthContext } from '../context/authContext';
import axios from "axios";

const NewCourse = () =>
{
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [inputs, setInputs] = useState(
    {
            course_name:"",
            length:"",
            about:"",
            course_price:"",
            difficulty:"",
    });
    const {currentUser} = useContext(AuthContext);

    const handleChange = e =>
    {
        setInputs(previous => 
        (
            {
                ...previous, [e.target.name]: e.target.value
            }
        ));
    }
    const handleSubmit = async e =>
    {
        //e.preventDefault();
        
        if(inputs.course_name.length === 0 || inputs.length.length === 0 || inputs.about.length === 0
            || inputs.course_price.length === 0 || inputs.difficulty.length === 0)
        {
            alert("Fields cannot be empty.");
            return;
        }
        try
        {
            let date_created = new Date().toISOString().slice(0, 19).replace('T', ' ');
            let message = [
                inputs.course_name,
                currentUser.user_id,
                date_created,
                inputs.about,
                inputs.course_price,
                inputs.difficulty,
                inputs.length
            ];
            const response = await axios.post("api/courses/addCourse", message);
            console.log(response);
            window.location.reload(false);
        }
        catch(ex)
        {
            console.log(ex);
            setError(ex.response.data);
            //alert(ex.message + "\n" + ex.response.data);
        }
    }

    console.log(inputs);

    return(
        <div className="new-course">
            <div className="course-creating-items">
                <div className="title-area">
                    <div className="inter-large-title">Title</div>
                    <input className="course-title" required type="text" name="course_name" onChange={handleChange} placeholder="title" />
                </div>
                <div className="length-area">
                    <div className="course-length-title">
                        <div className="inter-large-title">Length</div>
                    </div>
                    <input className="course-length" required type="text" name="length" onChange={handleChange} placeholder="0.0h" />
                </div>
                <div className="desc-area">
                    <div className="field-name">
                        <div className="inter-large-title">Description</div>
                    </div>
                    <textarea className="desc" required cols="20" rows="5" name="about" onChange={handleChange} placeholder="description" />
                </div>
                <div className="course-details">
                    <div className="course-image">
                        <div className="inter-large-title">Image</div>
                        <img className="selected-image" src={RandomImage} alt=""></img>
                    </div>
                    <div className="difficulty">
                        <div className="inter-large-title">Difficulty</div>
                            <div className="form-check">
                                <label>
                                    <input
                                    type="radio"
                                    name="difficulty"
                                    value="beginner"
                                    checked={inputs.difficulty === "beginner"}
                                    onChange={handleChange}
                                    className="form-check-input"
                                    />
                                    beginner
                                </label>
                            </div>

                            <div className="form-check">
                                <label>
                                    <input
                                    type="radio"
                                    name="difficulty"
                                    value="intermediate"
                                    checked={inputs.difficulty === "intermediate"}
                                    onChange={handleChange}
                                    className="form-check-input"
                                    />
                                    intermediate
                                </label>
                            </div>

                            <div className="form-check">
                                <label>
                                    <input
                                    type="radio"
                                    name="difficulty"
                                    value="upper-intermediate"
                                    checked={inputs.difficulty === "upper-intermediate"}
                                    onChange={handleChange}
                                    className="form-check-input"
                                    />
                                    upper-intermediate
                                </label>
                            </div>

                            <div className="form-check">
                                <label>
                                    <input
                                    type="radio"
                                    name="difficulty"
                                    value="advanced"
                                    checked={inputs.difficulty === "advanced"}
                                    onChange={handleChange}
                                    className="form-check-input"
                                    />
                                    advanced
                                </label>
                            </div>
                    </div>
                    <div className="course-price">
                        <div className="inter-large-title">Price</div>
                        <input className="price" required type="numbers" name="course_price" onChange={handleChange} placeholder="1000" />
                    </div>
                </div>
            </div>
            <button className="build-buttons" onClick={handleSubmit}>Create</button>
        </div>
        
    );
}

export default NewCourse;