import React, {useEffect, useState} from "react";
import RandomImage from "../images/randomImage.png";

const NewCourse = () =>
{
    const [selectedOption, setSelectedOption] = useState([]);
    const optionSelectionHandler = (event)  =>
    {
        setSelectedOption(event.target.value);
    }
    useEffect(() =>
    {
        try
        {
            optionSelectionHandler();
        }
        catch
        {

        }
    }, [])

    return(
        <div className="new-course">
            <div className="course-creating-items">
                <div className="title-area">
                    <div className="inter-large-title">Title</div>
                    <input className="course-title" required type="text" placeholder="title" />
                </div>
                <div className="length-area">
                    <div className="course-length-title">
                        <div className="inter-large-title">Length</div>
                    </div>
                    <input className="course-length" required type="text" placeholder="0.0h" />
                </div>
                <div className="desc-area">
                    <div className="field-name">
                        <div className="inter-large-title">Description</div>
                    </div>
                    <textarea className="desc" required cols="20" rows="5" placeholder="description" />
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
                                    name="difficulty-option"
                                    value="beginner"
                                    checked={selectedOption === "beginner"}
                                    onChange={e => optionSelectionHandler(e)}
                                    className="form-check-input"
                                    />
                                    beginner
                                </label>
                            </div>

                            <div className="form-check">
                                <label>
                                    <input
                                    type="radio"
                                    name="difficulty-option"
                                    value="intermediate"
                                    checked={selectedOption === "intermediate"}
                                    onChange={e => optionSelectionHandler(e)}
                                    className="form-check-input"
                                    />
                                    intermediate
                                </label>
                            </div>

                            <div className="form-check">
                                <label>
                                    <input
                                    type="radio"
                                    name="difficulty-option"
                                    value="upper-intermediate"
                                    checked={selectedOption === "upper-intermediate"}
                                    onChange={e => optionSelectionHandler(e)}
                                    className="form-check-input"
                                    />
                                    upper-intermediate
                                </label>
                            </div>

                            <div className="form-check">
                                <label>
                                    <input
                                    type="radio"
                                    name="difficulty-option"
                                    value="advanced"
                                    checked={selectedOption === "advanced"}
                                    onChange={e => optionSelectionHandler(e)}
                                    className="form-check-input"
                                    />
                                    advanced
                                </label>
                            </div>
                    </div>
                    <div className="course-price">
                        <div className="inter-large-title">Price</div>
                        <input className="price" required type="numbers" placeholder="" />
                    </div>
                </div>
            </div>
            <button className="build-buttons">Create</button>
        </div>
        
    );
}

export default NewCourse;