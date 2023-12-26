import React, {useContext, useEffect, useState} from "react";
import RandomImage from "../images/randomImage.png";
import SideScroll from "../pages/additionalScripts/sideScrollScript.js"
import Post from "./resourses/PostCardTemplate.jsx";
import NewCourse from "../pages/NewCourse.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext';

const MyProfile = () =>
{
    const [courses, setCourses] = useState([]);
    const [currentElement, setCurrentElement] = useState(null);
    const [buttonText, setButtonText] = useState("Create");
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate();

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
                //alert(error);
                console.log(error);
            }
        }

        fetchCourses();
    }, []);

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
            setButtonText("Back");
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
                            {currentUser.login}
                        </div>
                        <button className="build-buttons"> STATUS </button>
                    </div>
                  </div>
                  <div className="info">
                      <div>Name: {currentUser.login}</div>
                      {/*<div>Phone: </div>*/}
                      <div>Email: {currentUser.email}</div>
                  </div>
                  <div className="edit-profile">
                    <button className="build-buttons">Edit</button>
                  </div>
              </div>
          </div>
          <div className="courses-card">
              <div className="build-form">
                <div className="title-area">
                    <div className="montserrat-very-large-bold-title">COURSES</div>
                    <button className="build-buttons" onClick={() => changeElement()}>{buttonText}</button>
                </div>
                {elements[currentElement]}
              </div>
          </div>
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



export default MyProfile;