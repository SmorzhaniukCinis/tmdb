import {Dispatch} from "redux";
import {ActionTypes} from "./store";
import {mediaType} from "../Common/types";
import {tvAPI} from "../API/TVAPI/TVAPI";
import {movieAPI} from "../API/movieAPI/movieAPI";
import {commonMediaCredits} from "../API/movieAPI/movieTypes";

const SET_LOADING = "media/SET_LOADING"
const SET_CREDITS = "media/SET_CREDITS"

const initialState = {
    isLoading: false,
    credits: {} as commonMediaCredits
}
type initialStateType = typeof initialState

export const MediaReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_CREDITS:
            return {...state, credits: action.credits}
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const mediaActions = {
    setMovieDetails: (credits: commonMediaCredits) => ({type: SET_CREDITS, credits} as const),
    setLoading: (isLoading: boolean) => ({type: SET_LOADING, isLoading} as const),
}

export const getCredits = (mediaId: number, mediaType: mediaType) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(mediaActions.setLoading(true))
    if(mediaType === 'tv') {
        const TVCredits = await tvAPI.getCredits(mediaId)
        dispatch(mediaActions.setMovieDetails(TVCredits))
    } else {
        const MovieCredits = await movieAPI.getCredits(mediaId)
        dispatch(mediaActions.setMovieDetails(MovieCredits))
    }
    dispatch(mediaActions.setLoading(false))
}



