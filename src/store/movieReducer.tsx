import {Dispatch} from "redux";
import {ActionTypes, RootStateType} from "./store";
import {accountStats, movieDetailsType} from "../API/movieAPI/movieTypes";
import {movieAPI} from "../API/movieAPI/movieAPI";

const SET_MOVIE_DETAILS = "movie/SET_MOVIE_DETAILS"
const SET_LOADING = "movie/SET_LOADING"
const SET_RATING_LOADING = "movie/SET_RATING_LOADING"
const SET_MOVIE_STATS = "movie/SET_MOVIE_STATS"

const initialState = {
    movieDetails: {} as movieDetailsType,
    isLoading: false,
    isRatingLoading: false,
    movieStats: {} as accountStats
}
type initialStateType = typeof initialState

export const MovieReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_MOVIE_DETAILS:
            return {...state, movieDetails: action.movieDetails}
        case SET_MOVIE_STATS:
            return {...state, movieStats: action.movieStats}
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        case SET_RATING_LOADING:
            return {...state, isRatingLoading: action.isLoading}
        default:
            return state
    }
}

export const movieActions = {
    setMovieDetails: (movieDetails: movieDetailsType) => ({type: SET_MOVIE_DETAILS, movieDetails} as const),
    setLoading: (isLoading: boolean) => ({type: SET_LOADING, isLoading} as const),
    setRatingLoading: (isLoading: boolean) => ({type: SET_RATING_LOADING, isLoading} as const),
    setMovieStats: (movieStats: accountStats) => ({type: SET_MOVIE_STATS, movieStats} as const),
}

export const getMovieDetails = (id: number) => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    dispatch(movieActions.setLoading(true))
    const res = await movieAPI.getMovieDetails(id)
    dispatch(movieActions.setMovieDetails(res))
    const sessionId = getState().auth.sessionId
    const stats = await movieAPI.getAccountMovieStats(id, sessionId)
    dispatch(movieActions.setMovieStats(stats))
    dispatch(movieActions.setLoading(false))
}
export const rateMovie = (id: number, value: number) =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        dispatch(movieActions.setRatingLoading(true))
        const sessionId = getState().auth.sessionId
        await movieAPI.rateMovie(value, id, sessionId)
        const stats = await movieAPI.getAccountMovieStats(id, sessionId)
        dispatch(movieActions.setMovieStats(stats))
        dispatch(movieActions.setRatingLoading(false))

    }
export const deleteMovieRating = (id: number) => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    const sessionId = getState().auth.sessionId
    await movieAPI.deleteMovieRating(id, sessionId)
    const stats = await movieAPI.getAccountMovieStats(id, sessionId)
    dispatch(movieActions.setMovieStats(stats))

}
export const getStats = (id: number, mediaType: 'movie' | 'tv') =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        const sessionId = getState().auth.sessionId
        if(mediaType === 'movie') {
            debugger
            const stats = await movieAPI.getAccountMovieStats(id, sessionId)
            dispatch(movieActions.setMovieStats(stats))
        }
    }
