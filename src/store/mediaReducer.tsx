import {Dispatch} from "redux";
import {ActionTypes} from "./store";
import {mediaImagesType, mediaType, MinimizedMediaDetails} from "../Common/types";
import {tvAPI} from "../API/TVAPI/TVAPI";
import {movieAPI} from "../API/movieAPI/movieAPI";
import {commonMediaCredits} from "../API/movieAPI/movieTypes";

const SET_LOADING = "media/SET_LOADING"
const SET_MEDIA_CREDITS = "media/SET_MEDIA_CREDITS"
const SET_MEDIA_DETAILS = "media/SET_MEDIA_DETAILS"
const SET_MEDIA_IMAGES = "media/SET_MEDIA_IMAGES"

const initialState = {
    isLoading: false,
    credits: {} as commonMediaCredits,
    details: {} as MinimizedMediaDetails,
    images: {} as mediaImagesType
}
type initialStateType = typeof initialState

export const MediaReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_MEDIA_CREDITS:
            return {...state, credits: action.credits}
        case SET_MEDIA_DETAILS:
            return {...state, details: action.details}
        case SET_MEDIA_IMAGES:
            return {...state, images: action.images}
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const mediaActions = {
    setMediaCredits: (credits: commonMediaCredits) => ({type: SET_MEDIA_CREDITS, credits} as const),
    setMediaDetails: (details: MinimizedMediaDetails) => ({type: SET_MEDIA_DETAILS, details} as const),
    setMediaImages: (images: mediaImagesType) => ({type: SET_MEDIA_IMAGES, images} as const),
    setLoading: (isLoading: boolean) => ({type: SET_LOADING, isLoading} as const),
}

export const getMediaCredits = (mediaId: number, mediaType: mediaType) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(mediaActions.setLoading(true))
    if(mediaType === 'tv') {
        const TVCredits = await tvAPI.getCredits(mediaId)
        dispatch(mediaActions.setMediaCredits(TVCredits))
    } else {
        const MovieCredits = await movieAPI.getCredits(mediaId)
        dispatch(mediaActions.setMediaCredits(MovieCredits))
    }
    dispatch(mediaActions.setLoading(false))
}
export const getMediaDetails = (mediaId: number, mediaType: mediaType) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(mediaActions.setLoading(true))
    if(mediaType === 'tv') {
        const tvDetails = await tvAPI.getMinimizedTVDetails(mediaId)
        dispatch(mediaActions.setMediaDetails(tvDetails))
    } else {
        const movieDetails = await movieAPI.getMinimizedMovieDetails(mediaId)
        dispatch(mediaActions.setMediaDetails(movieDetails))
    }
    dispatch(mediaActions.setLoading(false))
}
export const getMediaImages = (mediaId: number, mediaType: mediaType) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(mediaActions.setLoading(true))
    if(mediaType === 'tv') {
        const tvImages = await tvAPI.getTVImages(mediaId)
        dispatch(mediaActions.setMediaImages(tvImages))
    } else {
        const movieImages = await movieAPI.getMovieImages(mediaId)
        dispatch(mediaActions.setMediaImages(movieImages))
    }
    dispatch(mediaActions.setLoading(false))
}



