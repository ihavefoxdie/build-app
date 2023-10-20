import React, {useEffect} from 'react';
import {useState} from "react";
//import Dummy from "./resourses/dummyPosts.jsx"
import SideScroll from "../pages/additionalScripts/sideScrollScript.js"
import axios from "axios";


import Post from "../pages/resourses/PostCardTemplate.jsx"


const Home = () => {
    const scrollRef = SideScroll();

    const [courses, setCourses] = useState([]);
    useEffect(() =>
    {
        const fetchAllCourses = async ()=>
        {
            try
            {
                const result = await axios.get("http://localhost:8800/courses");
                setCourses(result.data);
                console.log(result);
            }
            catch (error)
            {
                console.log(error);
            }
        }
        fetchAllCourses();
    }, []);
    let posts = new Array();
    for (let i = 0; i < courses.length; i++)
    {
        posts.push(Post(courses[i].difficulty, courses[i].course_name, courses[i].about, courses[i].course_price + " RUB", courses[i].length + " h."));
    }
    return(
        <div className="home">
                <div className="build-wrapper" ref={scrollRef}>
                    {posts.map(post => (
                        <div>{post}</div>
                    ))}
                </div>
        </div>
    );
}

export default Home;