import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        genres: {}
    },
    reducers: {
        GetApi: (state, action) => {
            state.url = action.payload
        },
        GetGenres: (state, action) => {
            state.genres = action.payload
        }
    }
})

export const { GetApi, GetGenres } = homeSlice.actions

export default homeSlice.reducer