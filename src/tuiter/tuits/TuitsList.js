import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <div>
            {
                tuitsArray.map(tuit =>
                    <TuitItem key={tuit._id} post={tuit}/>
                )
            }
        </div>
    )
};

export default TuitsList;