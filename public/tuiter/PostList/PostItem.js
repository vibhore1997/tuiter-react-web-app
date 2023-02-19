const PostItem = (post) => {
    return (`
    <div class="wd-author-tuit wd-border">
  <span class="wd-author-avatar"><img src="${post.userImage}"></span>
  <div class="wd-tuit-body">
    <div class="wd-author-name text-white"> ${post.userName} </div>
    <span><i class="fa fa-check-circle wd-check-mark"></i></span>
    <span class="wd-author-handle"> ${post.userHandle} &#183; ${post.date}</span>
    <span class="wd-three-dots">&#183;&#183;&#183;</span>
    <div class="wd-tuit-content">
        ${post.content}
    </div>
    <div class="wd-tuit-img-body">
      <img class="wd-tuit-img ${post.imgTitle.length === 0 ? 'wd-tuit-image-full-border' : 'wd-tuit-image-top-border'}" src="${post.postImage}"/><br>
      ${post.imgTitle.length === 0 ? '' : `
            <div class="wd-tuit-img-description">
        <p class="wd-tuit-img-title text-white">${post.imgTitle}</p>
        <p class="wd-tuit-img-text">${post.imgDescription}</p>
      </div>
      `}
    </div>
  </div>
  <div>
    <ul class="wd-reaction-bar mt-3">
      <li>
        <a class="wd-reaction-tab wd-reaction-tab-unselected" href="#">
          <i class="far fa-comment" aria-hidden="true"></i> 22
        </a>
      </li>
      <li>
        <a class="wd-reaction-tab wd-reaction-tab-unselected" href="#">
          <i class="fa fa-retweet" aria-hidden="true"></i> 9
        </a>
      </li>
      <li>
        <a class="wd-reaction-tab wd-reaction-tab-selected" href="#">
          <i class="fa fa-heart" aria-hidden="true"></i> 37
        </a>
      </li>
      <li>
        <a class="wd-reaction-tab wd-reaction-tab-unselected" href="#">
          <i class="fa fa-share" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div>
</div>
    `);
}

export default PostItem;