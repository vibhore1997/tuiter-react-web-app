import who from "./who.js";
import whoToFollowListItem from "./WhoToFollowListItem.js";
const WhoToFollowList = () => {
    return (`
      <div class="list-group">
        <span class="list-group-item"><strong>Who to follow</strong></span>
           ${
        who.map(who => {
            return(whoToFollowListItem(who));
        }).join('')
    }
       </div>
    `);
}

export default WhoToFollowList;