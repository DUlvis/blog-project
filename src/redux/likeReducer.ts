import { createSlice } from '@reduxjs/toolkit'

type LikeArticles = {
    [id: number]: boolean
}

export const initialState: LikeArticles = {
    1: true,
    3: true,
}

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLikeState: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    },
})

export const { toggleLikeState } = likeSlice.actions

export default likeSlice.reducer
