import {Dispatch} from "redux";
import {ActionTypes} from "./store";
import {mediaCardType, mediaImagesType, mediaType, MinimizedMediaDetails} from "../Common/types";
import {tvAPI} from "../API/TVAPI/TVAPI";
import {movieAPI} from "../API/movieAPI/movieAPI";
import {commonMediaCredits, popularMovie} from "../API/movieAPI/movieTypes";
import {CommonResType} from "../API/accountAPI/accountTypes";
import {popularTV} from "../API/TVAPI/TVTypes";

const SET_LOADING = "media/SET_LOADING"
const SET_MEDIA_CREDITS = "media/SET_MEDIA_CREDITS"
const SET_MEDIA_DETAILS = "media/SET_MEDIA_DETAILS"
const SET_MEDIA_IMAGES = "media/SET_MEDIA_IMAGES"
const SET_POPULAR_MEDIA = "media/SET_POPULAR_MEDIA"
const SET_TOP_RATED_MEDIA = "media/SET_TOP_RATED_MEDIA"

const initialState = {
    isLoading: true,
    credits: {} as commonMediaCredits,
    details: {} as MinimizedMediaDetails,
    images: {} as mediaImagesType,
    popular: {} as { popularTV: mediaCardType[], popularMovie: mediaCardType[] },
    topRated: {} as { topRatedTV: mediaCardType[], topRatedMovie: mediaCardType[] }
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
        case SET_POPULAR_MEDIA:
            return {
                ...state, popular: {
                    popularTV: action.popularTV,
                    popularMovie: action.popularMovie
                }
            }
        case SET_TOP_RATED_MEDIA:
            return {
                ...state, topRated: {
                    topRatedTV: action.popularTV,
                    topRatedMovie: action.popularMovie
                }
            }
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
    setPopularMedia: (popularTV: mediaCardType[], popularMovie: mediaCardType[]) => ({
        type: SET_POPULAR_MEDIA,
        popularMovie,
        popularTV
    } as const),
    setTopRatedMedia: (popularTV: mediaCardType[], popularMovie: mediaCardType[]) => ({
        type: SET_TOP_RATED_MEDIA,
        popularMovie,
        popularTV
    } as const),
    setLoading: (isLoading: boolean) => ({type: SET_LOADING, isLoading} as const),
}

export const getMediaCredits = (mediaId: number, mediaType: mediaType) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(mediaActions.setLoading(true))
    if (mediaType === 'tv') {
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
    if (mediaType === 'tv') {
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
    if (mediaType === 'tv') {
        const tvImages = await tvAPI.getTVImages(mediaId)
        dispatch(mediaActions.setMediaImages(tvImages))
    } else {
        const movieImages = await movieAPI.getMovieImages(mediaId)
        dispatch(mediaActions.setMediaImages(movieImages))
    }
    dispatch(mediaActions.setLoading(false))
}
export const getPopularMedia = () => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(mediaActions.setLoading(true))
    const popularTV = await tvAPI.getPopularTVShow()
    const popularMovie = await movieAPI.getPopularMovie()
    dispatch(mediaActions.setPopularMedia(popularTV, popularMovie))
    dispatch(mediaActions.setLoading(false))
}
export const getTopRatedMedia = () => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(mediaActions.setLoading(true))
    const popularTV = await tvAPI.getTopRatedTVShow()
    const popularMovie = await movieAPI.getTopRatedMovie()
    debugger
    dispatch(mediaActions.setTopRatedMedia(popularTV, popularMovie))
    dispatch(mediaActions.setLoading(false))
}



