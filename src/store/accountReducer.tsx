import {Dispatch} from "redux";
import {ActionTypes, RootStateType} from "./store";
import {accountAPI} from "../API/accountAPI/accoutAPI";
import {concat} from 'lodash';
import {
    CommonResType,
    createdList,
    DetailsType,
    FavoriteMovie,
    FavoriteTVShow,
    MovieWatchList,
    ratedMovies,
    ratedTVEpisodes,
    ratedTVShow,
    TVShowWatchList
} from "../API/accountAPI/accountTypes";
import {movieAPI} from "../API/movieAPI/movieAPI";
import {movieActions} from "./movieReducer";


const SET_LOADING = "account/SET_LOADING"
const SET_ACCOUNT_DETAILS = "account/SET_ACCOUNT_DETAILS"
const SET_DARK_THEME = "account/SET_DARK_THEME"
const SET_CREATED_LISTS = "account/SET_CREATED_LISTS"
const SET_FAVORITE_MOVIE = "account/SET_FAVORITE_MOVIE"
const SET_FAVORITE_TV_SHOW = "account/SET_FAVORITE_TV_SHOW"
const DELETE_ACCOUNT_DETAILS = "account/DELETE_ACCOUNT_DETAILS"
const SET_RATING_MOVIE = "account/SET_RATING_MOVIE"
const SET_RATING_TV_SHOW = "account/SET_RATING_TV_SHOW"
const SET_RATED_TV_EPISODES = "account/SET_RATED_TV_EPISODES"
const SET_MOVIE_WATCH_LIST = "account/SET_MOVIE_WATCH_LIST"
const SET_TV_SHOW_WATCH_LIST = "account/SET_TV_SHOW_WATCH_LIST"
const SET_EVENT_MESSAGE = "account/SET_EVENT_MESSAGE"
const DELETE_EVENT_MESSAGE = "account/DELETE_EVENT_MESSAGE"


const initialState: initialStateType = {
    isLoading: false,
    details: {
        avatar: {
            gravatar: {
                hash: ''
            },
            tmdb: {
                avatar_path: ""
            }
        },
        id: null,
        iso_639_1: null,
        iso_3166_1: null,
        name: null,
        include_adult: null,
        username: null
    },
    isDarkTheme: false,
    createdLists: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    favoriteMovie: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    favoriteTVShow: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    ratingMovie: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    ratingTVShow: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    ratedSeries: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    movieWatchList: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    TVShowWatchList: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    eventMessages: []
}

type initialStateType = {
    isLoading: boolean
    details: DetailsType
    isDarkTheme: boolean,
    createdLists: CommonResType<createdList>
    favoriteMovie: CommonResType<FavoriteMovie>
    favoriteTVShow: CommonResType<FavoriteTVShow>
    ratingTVShow: CommonResType<ratedTVShow>
    ratingMovie: CommonResType<ratedMovies>
    ratedSeries: CommonResType<ratedTVEpisodes>
    movieWatchList: CommonResType<MovieWatchList>
    TVShowWatchList: CommonResType<TVShowWatchList>
    eventMessages: Array<string>
}

export const AccountReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_ACCOUNT_DETAILS:
            return {...state, details: action.payload}
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        case DELETE_ACCOUNT_DETAILS:
            return {
                ...state, details: {
                    avatar: {
                        gravatar: {
                            hash: ''
                        },
                        tmdb: {
                            avatar_path: ""
                        }
                    },
                    id: null,
                    iso_639_1: null,
                    iso_3166_1: null,
                    name: null,
                    include_adult: null,
                    username: null
                }
            }
        case SET_DARK_THEME:
            return {...state, isDarkTheme: action.payload}
        case SET_CREATED_LISTS:
            return {...state, createdLists: action.createdLists}
        case SET_FAVORITE_MOVIE:
            return {...state, favoriteMovie: action.favoriteMovie}
        case SET_FAVORITE_TV_SHOW:
            return {...state, favoriteTVShow: action.favoriteTV}
        case SET_RATING_TV_SHOW:
            return {...state, ratingTVShow: action.shows}
        case SET_RATING_MOVIE:
            return {...state, ratingMovie: action.movies}
        case SET_RATED_TV_EPISODES:
            return {...state, ratedSeries: action.series}
        case SET_MOVIE_WATCH_LIST:
            return {...state, movieWatchList: action.movies}
        case SET_TV_SHOW_WATCH_LIST:
            return {...state, TVShowWatchList: action.series}
        case SET_EVENT_MESSAGE:
            return {...state, eventMessages: concat(state.eventMessages, action.message)}
        case DELETE_EVENT_MESSAGE:
            const array = state.eventMessages
            array.shift()
            return {...state, eventMessages:[...array]}
        default:
            return state
    }
}

export const accountActions = {
    setIsLoading: (isLoading: boolean) => ({type: SET_LOADING, isLoading} as const),
    setAccountDetails: (payload: DetailsType) => ({type: SET_ACCOUNT_DETAILS, payload} as const),
    deleteAccountDetails: () => ({type: DELETE_ACCOUNT_DETAILS} as const),
    setDarkTheme: (payload: boolean) => ({type: SET_DARK_THEME, payload} as const),
    setCreatedLists: (createdLists: CommonResType<createdList>) => ({
        type: SET_CREATED_LISTS,
        createdLists
    } as const),
    setFavoriteMovie: (favoriteMovie: CommonResType<FavoriteMovie>) => ({
        type: SET_FAVORITE_MOVIE,
        favoriteMovie
    } as const),
    setFavoriteTVShow: (favoriteTV: CommonResType<FavoriteTVShow>) => ({
        type: SET_FAVORITE_TV_SHOW,
        favoriteTV
    } as const),
    setRatingTVShow: (shows: CommonResType<ratedTVShow>) => ({
        type: SET_RATING_TV_SHOW,
        shows
    } as const),
    setRatingMovie: (movies: CommonResType<ratedMovies>) => ({
        type: SET_RATING_MOVIE,
        movies
    } as const),
    setRatingTVEpisodes: (series: CommonResType<ratedTVEpisodes>) => ({
        type: SET_RATED_TV_EPISODES,
        series
    } as const),
    setMovieWatchList: (movies: CommonResType<MovieWatchList>) => ({
        type: SET_MOVIE_WATCH_LIST,
        movies
    } as const),
    setTVEpisodesWatchList: (series: CommonResType<TVShowWatchList>) => ({
        type: SET_TV_SHOW_WATCH_LIST,
        series
    } as const),
    setEventMessage: (message:string) => ({
        type: SET_EVENT_MESSAGE,
        message
    } as const),
    deleteEventMessage: () => ({
        type: DELETE_EVENT_MESSAGE,
    } as const),
}

export const getAccountInfo = () => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    const sessionId = getState().auth.sessionId
    const res = await accountAPI.getDetails(sessionId)
    dispatch(accountActions.setAccountDetails(res))
}
export const getCreatedList = () => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    dispatch(accountActions.setIsLoading(true))
    const sessionId = getState().auth.sessionId
    const res = await accountAPI.getCreatedList(sessionId)
    dispatch(accountActions.setCreatedLists(res))
    dispatch(accountActions.setIsLoading(false))
}
export const getFavoriteMovie = (page?:number) => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    dispatch(accountActions.setIsLoading(true))
    const sessionId = getState().auth.sessionId
    const res = await accountAPI.getFavoriteMovie(sessionId, page)
    dispatch(accountActions.setFavoriteMovie(res))
    dispatch(accountActions.setIsLoading(false))
}
export const getFavoriteTVShow = (page?:number) => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    dispatch(accountActions.setIsLoading(true))
    const sessionId = getState().auth.sessionId
    const res = await accountAPI.getFavoriteTVShow(sessionId, page)
    dispatch(accountActions.setFavoriteTVShow(res))
    dispatch(accountActions.setIsLoading(false))
}

export const getRatingMoviesAndTVShows = (page?:number) => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    dispatch(accountActions.setIsLoading(true))
    const sessionId = getState().auth.sessionId
    const movie = await accountAPI.getRatedMovies(sessionId, page)
    const TVShow = await accountAPI.getRatedTVShow(sessionId, page)
    dispatch(accountActions.setRatingMovie(movie))
    dispatch(accountActions.setRatingTVShow(TVShow))
    dispatch(accountActions.setIsLoading(false))
}
export const getMoviesAndTVShowsWatchList = (page?:number) => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    dispatch(accountActions.setIsLoading(true))
    const sessionId = getState().auth.sessionId
    const movie = await accountAPI.getMovieWatchList(sessionId, page)
    const TVShow = await accountAPI.getTVShowWatchList(sessionId, page)
    dispatch(accountActions.setMovieWatchList(movie))
    dispatch(accountActions.setTVEpisodesWatchList(TVShow))
    dispatch(accountActions.setIsLoading(false))
}
export const getRatedTVEpisodes = (page?:number) => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    dispatch(accountActions.setIsLoading(true))
    const sessionId = getState().auth.sessionId
    const res = await accountAPI.getRatedTVEpisodes(sessionId, page)
    dispatch(accountActions.setRatingTVEpisodes(res))
    dispatch(accountActions.setIsLoading(false))
}
export const addToFavorite = (id: number, type: 'movie' | 'tv', isFavorite: boolean) =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        const sessionId = getState().auth.sessionId
        const res = await accountAPI.markAsFavorite(sessionId, isFavorite, id, type)
        switch (res.status_code) {
            case 12: dispatch(accountActions.setEventMessage('Item already added')); break
            case 13: dispatch(accountActions.setEventMessage('Item was deleted')); break
            case 1: dispatch(accountActions.setEventMessage('Item added successful')); break
            default: dispatch(accountActions.setEventMessage('Some error occurred'))
        }
        setTimeout(()=> {
            dispatch(accountActions.deleteEventMessage())
        }, 5000)
    }
export const addToWatchList = (id: number, type: 'movie' | 'tv', isWatchlist: boolean) =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        const sessionId = getState().auth.sessionId
        const res = await accountAPI.addToWatchList(sessionId, isWatchlist, id, type)
        switch (res.status_code) {
            case 12: dispatch(accountActions.setEventMessage('Item already added')); break
            case 13: dispatch(accountActions.setEventMessage('Item was deleted')); break
            case 1: dispatch(accountActions.setEventMessage('Item added successful')); break
            default: dispatch(accountActions.setEventMessage('Some error occurred'))
        }
        setTimeout(()=> {
            dispatch(accountActions.deleteEventMessage())
        }, 5000)
    }



