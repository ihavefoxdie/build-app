import React from "react";
import RandomImage from "../images/randomImage.png";
import SideScroll from "../pages/additionalScripts/sideScrollScript.js"
import Post from "./resourses/PostCardTemplate.jsx";

const MyProfile = () =>
{
    const scrollRef = SideScroll();
    return(
      <div className="profile">
          <form className="profile-card">
              <div className="build-form">
                  <img className="avatar" src={RandomImage} alt=""></img>
                  <div className="status-name-block">
                      <div className="montserrat-very-large-bold-title">
                          VLADYAN
                          <button className="build-buttons">
                              STATUS
                          </button>
                      </div>
                  </div>
                  <div className="info">
                      <div>Name: </div>
                      <div>Phone: </div>
                      <div>Email: </div>
                  </div>
              </div>
          </form>
          <form className="courses-card">
              <div className="build-form">
                  <div className="montserrat-very-large-bold-title" >COURSES</div>
                  <div className="build-wrapper" ref={scrollRef}>
                      {Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}{Post}
                  </div>
                  <button className="build-buttons">
                      Create
                  </button>
              </div>
          </form>
      </div>
    );
}

export default MyProfile;