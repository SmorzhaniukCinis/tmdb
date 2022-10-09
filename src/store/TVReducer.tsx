import {ActionTypes, RootStateType} from "./store";
import {Dispatch} from "redux";
import {tvAPI} from "../API/TVAPI/TVAPI";
import {mediaStatsType, seasonDetails, tvDetails} from "../API/TVAPI/TVTypes";
import {mediaActions} from "./mediaReducer";
import {mediaCardType} from "../Common/types";

const SET_TV_DETAILS = 'tv/SET_TV_DETAILS'
const SET_TV_STATS = 'tv/SET_TV_STATS'
const UPDATE_RATING = 'tv/UPDATE_RATING'
const SET_SEASON = 'tv/SET_SEASON'
const SET_ON_THE_AIR_TVSHOW = 'tv/SET_ON_THE_AIR_TVSHOW'


const initialState = {
    isLoading: true,
    tvDetails: {} as tvDetails,
    tvStats: {} as mediaStatsType,
    seasonDetails: {} as seasonDetails,
    onTheAirTVShows: [] as mediaCardType[]
}
type initialStateType = typeof initialState

export const TVReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_TV_DETAILS:
            debugger
            return {...state, tvDetails: action.tvDetails}
        case SET_TV_STATS:
            return {...state, tvStats: action.TVStats}
        case UPDATE_RATING:
            return {...state, tvStats: {...state.tvStats, rated: {value: action.value}}}
        case SET_SEASON:
            return {...state, seasonDetails: action.season}
        case SET_ON_THE_AIR_TVSHOW:
            return {...state, onTheAirTVShows: action.TVShows}
        default:
            return state
    }
}

export const tvActions = {
    setTVDetails: (tvDetails: tvDetails) => ({type: SET_TV_DETAILS, tvDetails} as const),
    setTVStats: (TVStats: mediaStatsType) => ({type: SET_TV_STATS, TVStats} as const),
    updateRating: (value: number) => ({type: UPDATE_RATING, value} as const),
    setSeason: (season: seasonDetails) => ({type: SET_SEASON, season} as const),
    setOnTheAirTVShow: (TVShows:  mediaCardType[]) => ({type: SET_ON_THE_AIR_TVSHOW, TVShows} as const),
}

export const GetTVDetails = (TVid: number) =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        dispatch(mediaActions.setLoading(true))
        const result = await tvAPI.getTVDetails(TVid)
        dispatch(tvActions.setTVDetails(result))
        const sessionId = getState().auth.sessionId
        const tvStats = await tvAPI.getTVShowStats(TVid, sessionId)
        dispatch(tvActions.setTVStats(tvStats))
        dispatch(mediaActions.setLoading(false))
    }
export const RateTV = (TVid: number, value: number) =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        const sessionId = getState().auth.sessionId
        const result = await tvAPI.rateTVShow(TVid, value, sessionId)
        if (result.status_code === 1) {
            dispatch(tvActions.updateRating(value))
        }
    }
export const deleteTVRating = (TVid: number) =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        const sessionId = getState().auth.sessionId
        const result = await tvAPI.deleteTVShowRating(TVid, sessionId)
        if (result.status_code === 1) {
            dispatch(tvActions.updateRating(0))
        }
    }
export const getTVStats = (id: number) =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        const sessionId = getState().auth.sessionId
        const stats = await tvAPI.getTVShowStats(id, sessionId)
        dispatch(tvActions.setTVStats(stats))

    }
export const GetSeason = (TVid: number, seasonNumber: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(mediaActions.setLoading(true))
        const result = await tvAPI.getTVSeason(TVid, seasonNumber)
        dispatch(tvActions.setSeason(result))
        dispatch(mediaActions.setLoading(false))
    }
export const GetOnTheAirTVShow = () => async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(mediaActions.setLoading(true))
        const result = await tvAPI.getOnTheAirTVShow(1)
        dispatch(tvActions.setOnTheAirTVShow(result))
        dispatch(mediaActions.setLoading(false))
    }