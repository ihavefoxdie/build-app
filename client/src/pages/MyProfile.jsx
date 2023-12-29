import React, {useContext, useEffect, useState} from "react";
import RandomImage from "../images/randomImage.png";
import Post from "./resourses/courseCard.jsx";
import NewCourse from "../pages/NewCourse.jsx";
import axios from "axios";
import { AuthContext } from '../context/authContext';
import NormalScroll from "../pages/additionalScripts/normalScrollScript.js"

const MyProfile = () =>
{
    const [courses, setCourses] = useState([]);
    const [currentElement, setCurrentElement] = useState(null);
    const [buttonText, setButtonText] = useState("Create");
    const {currentUser} = useContext(AuthContext);

    useEffect(() =>
    {
        const fetchCourses = async ()=>
        {
            try
            {
                const message = [currentUser.user_id];
                console.log(message);
                const resultCourses = await axios.post("api/courses/UserCourses", currentUser);
                setCourses(resultCourses.data);
                console.log(resultCourses);
            }
            catch (error)
            {
                console.log(error);
            }
        }

        fetchCourses();
    }, []);
    let posts = new Array();
    for (let i = 0; i < courses.length; i++)
    {
        posts.push(Post(courses[i]?.difficulty, courses[i]?.course_name, courses[i]?.about, courses[i].course_id));
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
                      <div>Email: {currentUser.email}</div>
                  </div>
                  {/*<div className="edit-profile">
                    <button className="build-buttons">Edit</button>
                  </div>*/}
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
    const scrollRef = NormalScroll();

    return(
        <div name="courses" ref={scrollRef} style={{maxHeight: '40vh', overflowX: 'auto', borderRadius: '2vh' }}>
            {posts.map(post => 
                <div key={post[1]} style={{'marginTop': '1vmin'}}>
                    {post[0]}
                </div>
            )}
        </div>
    );
}



export default MyProfile;