import {ActionTypes} from "./store";
import {Dispatch} from "redux";
import {movieAPI} from "../API/movieAPI/movieAPI";
import {popularMovie} from "../API/movieAPI/movieTypes";
import {mediaCardType} from "../Common/types";

const SET_LOADING = 'discoverMedia/SET_LOADING'
const SET_CURRENT_MEDIA = 'discoverMedia/SET_CURRENT_MEDIA'


const initialState = {
    currentDiscoveringMedia: [] as mediaCardType[],
    isLoading: false
}
type initialStateType = typeof initialState

export const DiscoverMediaReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        case SET_CURRENT_MEDIA:
            return {...state, currentDiscoveringMedia: action.media}
        default:
            return state
    }
}

export const discoverMediaActions = {
    setLoading: (isLoading: boolean) => ({type: SET_LOADING, isLoading} as const),
    setCurrentMedia: (media: mediaCardType[]) => ({type: SET_CURRENT_MEDIA, media} as const),
}

export const GetTopRatedMovie = (page: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
    debugger
        dispatch(discoverMediaActions.setLoading(true))
        const topRatedMovie = await movieAPI.getTopRatedMovie(page)
        dispatch(discoverMediaActions.setCurrentMedia(topRatedMovie))
        dispatch(discoverMediaActions.setLoading(false))
    }