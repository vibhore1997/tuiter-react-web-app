import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
            <div class="row">
            
              <div class="wd-input-icons">
                <i class="fa fa-search wd-search-icon" aria-hidden="true"></i>
                <input class="wd-input-field rounded-pill wd-search-bar-width wd-mr" type="text" placeholder="Search Tuiter">
                <i class="fa fa-cog wd-setting-icon" aria-hidden="true"></i>
              </div>
              
           </div>
           
           <ul class="nav mb-2 mt-2 nav-tabs d-flex">
                <li class="nav-item">
                  <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-inline-block">
                  <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           
           <div class="card px-0 mb-2">

              <img class="card-img-top wd-container" src="../images/starship.webp" width="100%">
              <div class="card-body wd-bottom-left text-white">
                <strong>SpaceX's Starship</strong>
              </div>

            </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
