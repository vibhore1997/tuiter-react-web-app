import React from "react";
import {useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";

const ProfileScreen = () => {
    const profile = useSelector(state => state.profile);
    return (
        <>
            <div>
                <div className="row">
                    <div className="col-1">
                        <span><i className="fa fa-arrow-left" aria-hidden="true"></i></span>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <span> <strong>{profile.firstName} {profile.lastName}</strong></span>
                        </div>
                        <div className="row">
                            <span className="text-muted"> 5196 Tweets </span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={profile.bannerPicture} className="wd-bannerPicture" alt=""></img>
            </div>
            <div className="mt-2">
                <img src={profile.profilePicture} className="wd-profilePicture" alt=""></img>
                <Link to="/tuiter/edit-profile"><button type="button" className="btn btn-outline-dark rounded-4 float-end">Edit Profile</button></Link>
            </div>
            <div>
                <div className="row">
                    <span> <strong>{profile.firstName} {profile.lastName}</strong></span>
                    <span className="text-muted"> @{profile.handle} </span>
                    <span className="mt-2"> {profile.bio}</span>
                    <div className="row mt-2">
                        <div className="col-3">
                            <i className="fa fa-solid fa-location-arrow"></i><span className="text-muted"> {profile.location} </span>
                        </div>
                        <div className="col-4">
                            <i className="fa fa-solid fa-calendar"></i><span className="text-muted"> Born {profile.dateOfBirth} </span>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-solid fa-briefcase"></i><span className="text-muted"> Joined {profile.dateJoined} </span>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">
                            <span> <strong> {profile.followingCount}</strong></span><span className="text-muted"> Following</span>
                        </div>
                        <div className="col-3">
                            <span> <strong> {profile.followersCount} </strong></span><span className="text-muted"> Followers</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default ProfileScreen;