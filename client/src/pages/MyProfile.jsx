import React, {useEffect, useState} from "react";
import RandomImage from "../images/randomImage.png";
import SideScroll from "../pages/additionalScripts/sideScrollScript.js"
import Post from "./resourses/PostCardTemplate.jsx";
import axios from "axios";

const MyProfile = () =>
{

    const [courses, setCourses] = useState([]);
    const [users, setUsers] = useState([]);
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
                setUsers(resultUsers.data);
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

    console.log(users[0]);
    let posts = new Array();
    for (let i = 0; i < courses.length; i++)
    {
        posts.push(Post(courses[i]?.difficulty, courses[i]?.course_name, courses[i]?.about, courses[i]?.course_price + " RUB", courses[i]?.length + " h."));
    }

    return(
      <div className="profile">
          <form className="profile-card">
              <div className="build-form">
                  <img className="avatar" src={RandomImage} alt=""></img>
                  <div className="status-name-block">
                      <div className="montserrat-very-large-bold-title">
                          {users[0]?.login}
                          <button className="build-buttons"> STATUS </button>
                      </div>
                  </div>
                  <div className="info">
                      <div>Name: {users[0]?.login}</div>
                      <div>Phone: </div>
                      <div>Email: {users[0]?.email}</div>
                  </div>
                  <div className="edit-profile">
                    <button className="build-buttons">Edit</button>
                  </div>
              </div>
          </form>
          <form className="courses-card">
              <div className="build-form">
                  <div className="montserrat-very-large-bold-title">COURSES</div>
                  {NewCourses()}
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
        <button className="build-buttons">Create</button>
        </div>
    );
}

const NewCourses = () =>
{
    return(
        <div className="new-course">
            <div className="title-area">
                <div className="field-name">
                    <div className="inter-large-title">Title</div>
                </div>
                <input className="course-title" required type="text" placeholder="" />
            </div>
            <div className="desc-area">
                <div className="field-name">
                    <div className="inter-large-title">Description</div>
                </div>
                <textarea className="desc" required cols="20" rows="5" placeholder="" />
            </div>
            <button className="build-buttons">Publish</button>
        </div>
    );
}

export default MyProfile;