import {Dispatch} from "redux";
import {ActionTypes, RootStateType} from "./store";
import {accountStats, movieDetailsType} from "../API/movieAPI/movieTypes";
import {movieAPI} from "../API/movieAPI/movieAPI";
import {mediaActions} from "./mediaReducer";
import {mediaCardType} from "../Common/types";

const SET_MOVIE_DETAILS = "movie/SET_MOVIE_DETAILS"
const SET_RATING = "movie/SET_RATING"
const SET_MOVIE_STATS = "movie/SET_MOVIE_STATS"
const SET_UPCOMING_MOVIE = "movie/SET_UPCOMING_MOVIE"
const SET_LATEST_MOVIE = "movie/SET_LATEST_MOVIE"

const initialState = {
    movieDetails: {} as movieDetailsType,
    isLoading: true,
    isRatingLoading: false,
    movieStats: {} as accountStats,
    upcomingMovies: [] as mediaCardType[],
    nowPlayingMovies: [] as mediaCardType[],
}
type initialStateType = typeof initialState

export const MovieReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_MOVIE_DETAILS:
            return {...state, movieDetails: action.movieDetails}
        case SET_MOVIE_STATS:
            return {...state, movieStats: action.movieStats}
        case SET_RATING:
            return {...state, movieStats: {...state.movieStats, rated: {value: action.value}}}
        case SET_UPCOMING_MOVIE:
            return {...state, upcomingMovies: action.movies}
        case SET_LATEST_MOVIE:
            return {...state, nowPlayingMovies: action.movies}
        default:
            return state
    }
}

export const movieActions = {
    setMovieDetails: (movieDetails: movieDetailsType) => ({type: SET_MOVIE_DETAILS, movieDetails} as const),
    setRating: (value: number) => ({type: SET_RATING, value} as const),
    setMovieStats: (movieStats: accountStats) => ({type: SET_MOVIE_STATS, movieStats} as const),
    setUpcomingMovie: (movies: mediaCardType[]) => ({type: SET_UPCOMING_MOVIE, movies} as const),
    setNowPlayingMovie: (movies: mediaCardType[]) => ({type: SET_LATEST_MOVIE, movies} as const),
}

export const getMovieDetails = (id: number) => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    dispatch(mediaActions.setLoading(true))
    const res = await movieAPI.getMovieDetails(id)
    dispatch(movieActions.setMovieDetails(res))
    const sessionId = getState().auth.sessionId
    const stats = await movieAPI.getAccountMovieStats(id, sessionId)
    dispatch(movieActions.setMovieStats(stats))
    dispatch(mediaActions.setLoading(false))
}
export const rateMovie = (id: number, value: number) =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        const sessionId = getState().auth.sessionId
        const res = await movieAPI.rateMovie(value, id, sessionId)
        if (res.success) {
            dispatch(movieActions.setRating(value))
        }
    }
export const deleteMovieRating = (id: number) => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    const sessionId = getState().auth.sessionId
    const res = await movieAPI.deleteMovieRating(id, sessionId)
    if (res.success) {
        dispatch(movieActions.setRating(0))
    }
}
export const getMovieStats = (id: number) =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        const sessionId = getState().auth.sessionId
        const stats = await movieAPI.getAccountMovieStats(id, sessionId)
        dispatch(movieActions.setMovieStats(stats))

    }
export const getUpcomingMovies = () => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(mediaActions.setLoading(true))
    const movie = await movieAPI.getUpcomingMovie(1)
    dispatch(movieActions.setUpcomingMovie(movie.results))
    dispatch(mediaActions.setLoading(false))
}
export const getNowPlayingMovie = () => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(mediaActions.setLoading(true))
    const movie = await movieAPI.getNowPlayingMovie(1)
    dispatch(movieActions.setNowPlayingMovie(movie.results))
    dispatch(mediaActions.setLoading(false))
}
