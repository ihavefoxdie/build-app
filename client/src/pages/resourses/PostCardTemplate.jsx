import React from "react";
import RandomImage from "../../images/randomImage.png";

let Post = [
    <div className="post">
        <div className="build-form">
            <div className="level">
                <div className="inter-medium-title">intermediate</div>
            </div>
            <img className="post-image" src={RandomImage} alt=""/>
            <div className="title">
                <div className="inter-xx-large-title">Sample Course</div>
            </div>
            <div className="description">
                <div className="inter-medium-title" >
                    description Description description description description description description description description Description description Description description Description
                </div>
            </div>
            <div className="lower-block">
                <div className="price">
                    <div className="inter-medium-title">1000 RUB</div>
                </div>
                <div className="course-length">
                    <div className="inter-medium-title">10 h.</div>
                </div>
            </div>
        </div>
    </div>
]

export default Post;