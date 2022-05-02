import {Dispatch} from "redux";
import {ActionTypes, RootStateType} from "./store";
import {accountAPI} from "../API/accountAPI/accoutAPI";
import {CommonResType, createdList, DetailsType, FavoriteMovie, FavoriteTVShow} from "../API/accountAPI/accountTypes";

const SET_ACCOUNT_DETAILS = "account/SET_ACCOUNT_DETAILS"
const SET_DARK_THEME = "account/SET_DARK_THEME"
const SET_CREATED_LISTS = "account/SET_CREATED_LISTS"
const SET_FAVORITE_MOVIE = "account/SET_FAVORITE_MOVIE"
const SET_FAVORITE_TV_SHOW = "account/SET_FAVORITE_TV_SHOW"
const DELETE_ACCOUNT_DETAILS = "account/DELETE_ACCOUNT_DETAILS"


const initialState: initialStateType = {
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
    }
}

type initialStateType = {
    details: DetailsType
    isDarkTheme: boolean,
    createdLists: CommonResType<createdList>
    favoriteMovie: CommonResType<FavoriteMovie>
    favoriteTVShow: CommonResType<FavoriteTVShow>
}

export const AccountReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_ACCOUNT_DETAILS:
            return {...state, details: action.payload}
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
        default:
            return state
    }
}

export const accountActions = {
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
}

export const getAccountInfo = () => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    const sessionId = getState().auth.sessionId
    const res = await accountAPI.getDetails(sessionId)
    dispatch(accountActions.setAccountDetails(res))
}
export const getCreatedList = () => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    const sessionId = getState().auth.sessionId
    const res = await accountAPI.getCreatedList(sessionId)
    dispatch(accountActions.setCreatedLists(res))
}
export const getFavoriteMovie = () => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    const sessionId = getState().auth.sessionId
    const res = await accountAPI.getFavoriteMovie(sessionId)
    dispatch(accountActions.setFavoriteMovie(res))
}
export const getFavoriteTVShow = () => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    const sessionId = getState().auth.sessionId
    const res = await accountAPI.getFavoriteTVShow(sessionId)
    dispatch(accountActions.setFavoriteTVShow(res))
}

