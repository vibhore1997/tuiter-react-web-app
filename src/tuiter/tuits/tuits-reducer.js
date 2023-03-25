import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.webp",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        clickLike(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            if (tuit.liked === true) {
                tuit.likes--;
            } else {
                tuit.likes++;
            }
            tuit.liked = !tuit.liked
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }

    }
});

export const {clickLike, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;