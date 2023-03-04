import React from "react";
import posts from './posts.json';
import PostItem from "./post-item";

const Home = () => {
    return (
    <div>
    {
        posts.map(post =>
            <PostItem key={post._id} post={post}/>
        )
    }
    </div>
    );
}

export default Home;