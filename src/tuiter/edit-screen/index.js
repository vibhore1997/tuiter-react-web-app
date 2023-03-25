import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {saveProfile} from "../reducers/profile-reducer";
import "./index.css";
import { Link } from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const name = profile.firstName.concat(" ").concat(profile.lastName);
    const dispatch = useDispatch();
    let newProfile = {...profile};
    const save = () => {
        dispatch(saveProfile(newProfile));
    };

    const nameOnChangeHandler = (value) => {
        const arrSplit = value.split(" ");
        newProfile.firstName = arrSplit[0]
        newProfile.lastName = arrSplit[1]
    }
    const bioOnChangeHandler = (value) => {
        newProfile.bio=value;
    }
    const locationOnChangeHandler = (value) => {
        newProfile.location=value;
    }
    const websiteOnChangeHandler = (value) => {
        newProfile.website=value;
    }

    const dateOnChangeHandler = (value) => {
        newProfile.dateOfBirth=value;
    }

    return (
        <>
            <div>
                <div className="row mb-2">
                    <div className="col-1">
                        <Link to="/tuiter/profile"><i className="far fa-window-close text-black"></i></Link>
                    </div>
                    <div className="col-11">
                        <span> <strong>Edit Profile</strong></span>
                        <Link to="/tuiter/profile"><button type="button" onClick={() => save()} class="btn btn-dark rounded-4 btn-sm float-end wd-button-save">Save</button></Link>
                    </div>

                </div>
            </div>
            <div>
                <img src={profile.bannerPicture} className="wd-bannerPicture" alt="" ></img>
            </div>
            <div className="mt-2">
                <img src={profile.profilePicture} className="wd-profilePicture" alt=""></img>
            </div>
            <div className="wd-div">
                <label for="name" className="text-muted">Name</label><br/>
                <input id="name" type="text" onChange={(event) => {
                    nameOnChangeHandler(event.target.value);
                }} className="form-control" defaultValue={name}></input>
            </div>
            <div className="wd-div">
                <label for="bio" className="text-muted">Bio</label><br/>
                <textarea id="bio" onChange={(event) => {
                    bioOnChangeHandler(event.target.value);
                }}  className="form-control wd-input bg-transparent" defaultValue={profile.bio}></textarea>
            </div>
            <div className="wd-div">
                <label for="location" className="text-muted">Location</label><br/>
                <input id="location" onChange={(event) => {
                    locationOnChangeHandler(event.target.value);
                }}  type="text" className="form-control wd-input bg-transparent" defaultValue={profile.location}></input>
            </div>
            <div className="wd-div">
                <label htmlFor="website" className="text-muted">Website</label><br/>
                <input id="website" onChange={(event) => {
                    websiteOnChangeHandler(event.target.value);
                }} type="text" className="form-control wd-input bg-transparent"
                       defaultValue={profile.website}></input>
            </div>
            <div className="wd-div">
                <label for="date" className="text-muted">Date of Birth</label><br/>
                <input id="date" onChange={(event) => {
                    dateOnChangeHandler(event.target.value);
                }} type="date" className="form-control wd-input bg-transparent" defaultValue={profile.dateOfBirth}></input>
            </div>
        </>
    );
};
export default EditProfile;