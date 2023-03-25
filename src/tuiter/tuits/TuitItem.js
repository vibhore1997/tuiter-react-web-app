import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <div className="wd-author-tuit wd-border">
            <span className="wd-author-avatar"><img src={`/tuiter/images/${post.image}`} /></span>
            <div className="wd-tuit-body">
                <div className="wd-author-name"> {post.userName} </div>
                <span><i className="bi bi-patch-check-fill wd-check-mark"></i></span>
                <span className="wd-author-handle"> {post.handle} &#183; {post.time}</span>
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(post._id)}></i>
                <div className="wd-tuit-content">
                    {post.tuit}
                </div>
            </div>
            <TuitStats post={post}/>
        </div>
    )
};

export default TuitItem;