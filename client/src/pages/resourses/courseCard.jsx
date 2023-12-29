import React from "react";
import RandomImage from "../../images/randomImage.png";

const smallCard = (lvl, title, desc, id) =>
{
    let Post = [
        <div className="course-card">
            <div className="build-card-white">
                <img className="post-image" src={RandomImage} alt=""/>
                <div className="second-block">
                    <div className="title">
                        <div className="inter-xx-large-title">{title}</div>
                    </div>
                    <div className="description">
                        <div className="inter-small-title">{desc}</div>
                    </div>
                </div>
                <div className="level">
                    <div className="inter-small-title">{lvl}</div>
                </div>
            </div>
        </div>,
        id
    ]

    return Post;
}



export default smallCard;