import React from "react";
import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {clickLike} from "./tuits-reducer";

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
                    onClick={() => dispatch(clickLike(post))}>
                        <FontAwesomeIcon icon={faHeart} />
                        <span className="ms-3 text-muted">{post.likes}</span>
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