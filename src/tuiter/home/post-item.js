import React from "react";
import "./index.css";
const PostItem = ({post}) => {
    return (
    <div className="wd-author-tuit wd-border">
  <span className="wd-author-avatar"><img src={`${post.userImage}`} /></span>
  <div className="wd-tuit-body">
    <div className="wd-author-name"> {post.userName} </div>
    <span><i className="bi bi-patch-check-fill wd-check-mark"></i></span>
    <span className="wd-author-handle"> {post.userHandle} &#183; {post.date}</span>
    <span className="wd-three-dots">&#183;&#183;&#183;</span>
    <div className="wd-tuit-content">
        {post.content}
    </div>
    <div className="wd-tuit-img-body">
      <img className={`wd-tuit-img ${post.imgTitle.length === 0 ? 'wd-tuit-image-full-border' : 'wd-tuit-image-top-border'}`} src={`${post.postImage}`} /><br/>
      {post.imgTitle.length === 0 ? '' :
            <div className="wd-tuit-img-description">
        <p className="wd-tuit-img-title">{post.imgTitle}</p>
        <p className="wd-tuit-img-text">{post.imgDescription}</p>
      </div>
      }
    </div>
  </div>
  <div>
    <ul className="wd-reaction-bar mt-3">
      <li>
        <a className="wd-reaction-tab wd-reaction-tab-unselected" href="#">
          <i className="far fa-comment" aria-hidden="true"></i> 22
        </a>
      </li>
      <li>
        <a className="wd-reaction-tab wd-reaction-tab-unselected" href="#">
          <i className="fa fa-retweet" aria-hidden="true"></i> 9
        </a>
      </li>
      <li>
        <a className="wd-reaction-tab wd-reaction-tab-selected" href="#">
          <i className="bi bi-heart" aria-hidden="true"></i> 37
        </a>
      </li>
      <li>
        <a className="wd-reaction-tab wd-reaction-tab-unselected" href="#">
          <i className="fa fa-share" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div>
</div>
    );
}

export default PostItem;