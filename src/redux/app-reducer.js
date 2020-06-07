import {SET_PHOTOS} from "./types";
import axios from "axios";

const API_KEY = 'xVquvUpiOgLbybGo4HS1rcVRdlgiM21mC66ZgjmlVLg'

const initialState = {
    photos: []
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state,
                photos: action.photos
            }
        default:
            return state
    }
}
// Action creators
export const setPhotos = (photos) => ({type: SET_PHOTOS, photos})

// Redux thunks
export const getPhotosThunk = (photo) => async (dispatch) => {
    let data = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&per_page=20&client_id=${API_KEY}`)
    dispatch(setPhotos(data.data.results))
}