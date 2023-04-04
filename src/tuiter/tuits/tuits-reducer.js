import { createSlice } from "@reduxjs/toolkit";
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

// const currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "image": "nasa.webp",
// };
//
// const templateTuit = {
//     ...currentUser,
//     "topic": "Space",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
// }


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }



    },
    // reducers: {
    //     deleteTuit(state, action) {
    //         const index = state
    //             .findIndex(tuit =>
    //                 tuit._id === action.payload);
    //         state.splice(index, 1);
    //     },
    //     clickLike(state, action) {
    //         const tuit = state.find((tuit) =>
    //             tuit._id === action.payload._id)
    //         if (tuit.liked === true) {
    //             tuit.likes--;
    //         } else {
    //             tuit.likes++;
    //         }
    //         tuit.liked = !tuit.liked
    //     },
    //     createTuit(state, action) {
    //         state.unshift({
    //             ...action.payload,
    //             ...templateTuit,
    //             _id: (new Date()).getTime(),
    //         })
    //     }
    //
    // }
});

export const {clickLike, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;