import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {updateTuitThunk}
    from "../../services/tuits-thunks";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <ul className="wd-reaction-bar mt-3">
                <li>
                    <a className="wd-reaction-tab wd-reaction-tab-unselected" href="#">
                        <i className="far fa-comment" aria-hidden="true"></i> {post.replies}
                    </a>
                </li>
                <li>
                    <a className="wd-reaction-tab wd-reaction-tab-unselected" href="#">
                        <i className="fa fa-retweet" aria-hidden="true"></i> {post.retuits}
                    </a>
                </li>
                <li>
                    <a className={`wd-reaction-tab ${post.liked === true ?'wd-reaction-tab-selected':''}`} href="#"
                    onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes + 1
                    }))}>
                        <i className="bi bi-heart-fill me-2 text-danger"></i>
                        <span className="ms-3 text-muted">{post.likes}</span>
                    </a>
                </li>
                <li>
                    <a className="wd-reaction-tab wd-reaction-tab-unselected" href="#"
                       onClick={() => dispatch(updateTuitThunk({
                           ...post,
                           dislikes: post.dislikes - 1
                       }))}>
                        <i className="bi bi-hand-thumbs-down"></i>
                        <span className="text-muted">{post.dislikes}</span>
                    </a>
                </li>
                <li>
                    <a className="wd-reaction-tab wd-reaction-tab-unselected" href="#">
                        <i className="fa fa-share" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default TuitStats;