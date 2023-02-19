const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item">
            <div class="row">
              <div class="col-10 d-flex flex-column">
                <small class="text-muted">${post.topic}</small>
                <ul class="list-inline">
                  <li class="list-inline-item"><strong>${post.userName}</strong></li>
                  <li class="list-inline-item"><i class="fa fa-check-circle"></i></li>
                  <li class="list-inline-item"><small class="text-muted">${post.time}</small></li>
                </ul>
                <span><strong>${post.title}</strong></span>
              </div>
              <div class="col-2">
                <img class="wd-image-icon wd-margin-mid" src="${post.image}">
              </div>
            </div>
          </li>
    `);
}
export default PostSummaryItem;