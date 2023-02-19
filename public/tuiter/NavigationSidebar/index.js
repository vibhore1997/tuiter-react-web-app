const NavigationSidebar = (active) => {
    return(`
         <div class="list-group">
        <span class="list-group-item"><i class="fab fa-twitter"></i></span>
        <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}">
            <i class="fa fa-home"></i><span
                class="d-none d-xl-inline-block wd-padding-left-side">Home</span></a>
        <a href="../explore/index.html" class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}" aria-current="true"><i
                class="fa fa-solid fa-hashtag"></i><span
                class="d-none d-xl-inline-block wd-padding-left-side">Explore</span></a>
        <a href="" class="list-group-item list-group-item-action"><i
                class="fa fa-solid fa-bell"></i>
          <span class="d-none d-xl-inline-block wd-padding-left-side">Notifications</span></a>
        <a href="" class="list-group-item list-group-item-action"><i
                class="fa fa-solid fa-envelope"></i>
          <span class="d-none d-xl-inline-block wd-padding-left-side">Messages</span></a>
        <a href="" class="list-group-item list-group-item-action"><i
                class="fa fa-solid fa-bookmark"></i>
          <span class="d-none d-xl-inline-block wd-padding-left-side">Bookmarks</span></a>
        <a href="" class="list-group-item list-group-item-action"><i
                class="fa fa-solid fa-list"></i><span
                class="d-none d-xl-inline-block wd-padding-left-side">Lists</span>
        </a>
        <a href="" class="list-group-item list-group-item-action"><i
                class="fa fa-solid fa-user"></i>
          <span class="d-none d-xl-inline-block wd-padding-left-side">Profile</span></a>
        <a href="" class="wd-padding-left list-group-item list-group-item-action"><span
                class="fa-stack fa-1x">
                            <i class="fas fa-circle fa-stack-1x wd-more-size text-white"></i>
                            <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black"></i>
                        </span> <span class="d-none d-xl-inline-block">More</span></a>
      </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;