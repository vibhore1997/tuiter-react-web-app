const WhoToFollowListItem = (who) => {
    return (`
            <span class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-2">
                        <img class="wd-image-icon2 float-start" src="../images/${who.avatarIcon}">
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <span><strong class="wd-font-size-side">${who.userName} </strong><i
                                    class="fa fa-check-circle"></i></span>
                        </div>
                        <div class="row">
                            <small>@${who.handle}</small>
                        </div>

                    </div>
                    <div class="col-4">
                        <button type="" class="btn btn-primary rounded-pill float-end">Follow</button>
                    </div>
                </div>
            </span>

    `);
}

export default WhoToFollowListItem;