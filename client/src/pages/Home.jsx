import React from 'react';
//import Dummy from "./resourses/dummyPosts.jsx"
import SideScroll from "../pages/additionalScripts/sideScrollScript.js"
import Post from "../pages/resourses/PostCardTemplate.jsx"


const Home = () => {
    const scrollRef = SideScroll();
    return (
        <div className="home">
                <div className="build-wrapper" ref={scrollRef}>
                    {Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}
                </div>
        </div>
    );
}

export default Home;