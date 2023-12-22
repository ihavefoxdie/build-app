import React, {useEffect, useState} from "react";
import RandomImage from "../images/randomImage.png";
import SideScroll from "../pages/additionalScripts/sideScrollScript.js"
import Post from "./resourses/PostCardTemplate.jsx";
import axios from "axios";

const MyProfile = () =>
{
    const [courses, setCourses] = useState([]);
    const [user, setUser] = useState([]);
    const [currentElement, setCurrentElement] = useState(null);
    const [buttonText, setButtonText] = useState("Create");

    useEffect(() =>
    {
        const fetchCourses = async ()=>
        {
            try
            {
                const resultCourses = await axios.get("http://localhost:8800/courses");
                setCourses(resultCourses.data);
                console.log(resultCourses);
            }
            catch (error)
            {
                console.log(error);
            }
        }
        const fetchUsers = async ()=>
        {
            try
            {
                const resultUsers = await axios.get("http://localhost:8800/users");
                setUser(resultUsers.data);
                console.log(resultUsers.data);
            }
            catch (error)
            {
                console.log(error);
            }
        }
        fetchUsers();
        fetchCourses();
    }, []);

    //console.log(users[0]);
    let posts = new Array();
    for (let i = 0; i < courses.length; i++)
    {
        posts.push(Post(courses[i]?.difficulty, courses[i]?.course_name, courses[i]?.about, courses[i]?.course_price + " RUB", courses[i]?.length + " h."));
    }
    const elements = [NewCourse(), Courses(posts)];

    const changeElement = () =>
    {
        if(currentElement === 1)
        {
            setCurrentElement(0);
            setButtonText("Publish");
        }
        else
        {
            setCurrentElement(1);
            setButtonText("Create");
        }
    }
    useEffect(() =>
    {
        try
        {
            changeElement();
        }
        catch
        {

        }
    }, [])
    console.log(currentElement);

    return(
      <div className="profile">
          <div className="profile-card">
              <div className="build-form">
                <div className="avatar-status">
                  <img className="avatar" src={RandomImage} alt=""></img>
                    <div className="status-name-block">
                        <div className="montserrat-very-large-bold-title">
                            {user[0]?.login}
                            <button className="build-buttons"> STATUS </button>
                        </div>
                    </div>
                  </div>
                  <div className="info">
                      <div>Name: {user[0]?.login}</div>
                      <div>Phone: </div>
                      <div>Email: {user[0]?.email}</div>
                  </div>
                  <div className="edit-profile">
                    <button className="build-buttons">Edit</button>
                  </div>
              </div>
          </div>
          <form className="courses-card">
              <div className="build-form">
                  <div className="montserrat-very-large-bold-title">COURSES</div>
                  {elements[currentElement]}
                  <button className="build-buttons" onClick={() => changeElement()}>{buttonText}</button>
              </div>
          </form>
      </div>
    );
}

const Courses = (posts) =>
{
    const scrollRef = SideScroll();
    return(
        <div>
            <div className="build-wrapper" ref={scrollRef}>
                {posts.map(post => (
                    <div>{post}</div>
                ))}
            </div>
        </div>
    );
}

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
    //setSelectedOption("intermediate");
    return(
        <div className="new-course">
            <div className="course-creating-items">
                <div className="title-area">
                    <div className="field-name">
                        <div className="inter-large-title">Title</div>
                    </div>
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
        </div>
    );
}

export default MyProfile;