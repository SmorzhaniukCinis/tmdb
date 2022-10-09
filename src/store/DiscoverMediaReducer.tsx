import {ActionTypes} from "./store";
import {Dispatch} from "redux";
import {movieAPI} from "../API/movieAPI/movieAPI";
import {mediaCardType} from "../Common/types";
import {tvAPI} from "../API/TVAPI/TVAPI";

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
        dispatch(discoverMediaActions.setLoading(true))
        const topRatedMovie = await movieAPI.getTopRatedMovie(page)
        dispatch(discoverMediaActions.setCurrentMedia(topRatedMovie))
        dispatch(discoverMediaActions.setLoading(false))
    }
export const GetPopularMovie = (page: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(discoverMediaActions.setLoading(true))
        const topRatedMovie = await movieAPI.getPopularMovie(page)
        dispatch(discoverMediaActions.setCurrentMedia(topRatedMovie))
        dispatch(discoverMediaActions.setLoading(false))
    }
export const GetUpcomingMovie = (page: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(discoverMediaActions.setLoading(true))
        const topRatedMovie = await movieAPI.getUpcomingMovie(page)
        dispatch(discoverMediaActions.setCurrentMedia(topRatedMovie))
        dispatch(discoverMediaActions.setLoading(false))
    }
export const GetNawPlayingMovie = (page: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(discoverMediaActions.setLoading(true))
        const topRatedMovie = await movieAPI.getNowPlayingMovie(page)
        dispatch(discoverMediaActions.setCurrentMedia(topRatedMovie))
        dispatch(discoverMediaActions.setLoading(false))
    }
export const GetPopularTVShow = (page: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(discoverMediaActions.setLoading(true))
        const topRatedMovie = await tvAPI.getPopularTVShow(page)
        dispatch(discoverMediaActions.setCurrentMedia(topRatedMovie))
        dispatch(discoverMediaActions.setLoading(false))
    }
export const GetTopRatedTVShow = (page: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(discoverMediaActions.setLoading(true))
        const topRatedMovie = await tvAPI.getTopRatedTVShow(page)
        dispatch(discoverMediaActions.setCurrentMedia(topRatedMovie))
        dispatch(discoverMediaActions.setLoading(false))
    }
export const GetOnAirTVShow = (page: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(discoverMediaActions.setLoading(true))
        const topRatedMovie = await tvAPI.getOnTheAirTVShow(page)
        dispatch(discoverMediaActions.setCurrentMedia(topRatedMovie))
        dispatch(discoverMediaActions.setLoading(false))
    }