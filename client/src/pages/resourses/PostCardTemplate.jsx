import React from "react";
import RandomImage from "../../images/randomImage.png";

const Card = (lvl, title, desc, price, len) =>
{
    let Post = [
        <div className="post">
            <div className="build-form">
                <div className="level">
                    <div className="inter-medium-title">{lvl}</div>
                </div>
                <img className="post-image" src={RandomImage} alt=""/>
                <div className="title">
                    <div className="inter-xx-large-title">{title}</div>
                </div>
                <div className="description">
                    <div className="inter-medium-title" >
                        {desc}
                    </div>
                </div>
                <div className="lower-block">
                    <div className="price">
                        <div className="inter-medium-title">{price}</div>
                    </div>
                    <div className="course-length">
                        <div className="inter-medium-title">{len}</div>
                    </div>
                </div>
            </div>
        </div>
    ]

    return Post;
}



export default Card;