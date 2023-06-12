import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) =>(<div className="post" key={post.id}>
                    <div className="img">
                        <img src={post.img} alt=""/>
                    </div>
                    <div className="content">
                        <Link to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                            <p>{post.desc}</p>
                            <button>Read more</button>
                        </Link>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

const posts = [
   {
     id: 1,
     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
     img: "https://loremflickr.com/cache/resized/65535_52706077934_9a3860e070_320_240_nofilter.jpg"
   },
   {
     id: 2,
     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
     img: "https://loremflickr.com/cache/resized/65535_52706077934_9a3860e070_320_240_nofilter.jpg",
   },
   {
     id: 3,
     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
     img: "https://loremflickr.com/cache/resized/65535_52706077934_9a3860e070_320_240_nofilter.jpg",
   },
   {
     id: 4,
     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
     img: "https://loremflickr.com/cache/resized/65535_52706077934_9a3860e070_320_240_nofilter.jpg",
   },
 ];

export default Home;