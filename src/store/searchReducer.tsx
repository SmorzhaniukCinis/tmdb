import {ActionTypes} from "./store";
import {Dispatch} from "redux";
import {MovieType, person, TVType} from "../API/SearchAPI/searchTypes";
import {searchAPI} from "../API/SearchAPI/searchAPI";
import {CommonResType} from "../API/accountAPI/accountTypes";

const SET_SEARCH_RES = 'search/SET_SEARCH_RES'
const SET_LOADING = 'search/SET_LOADING'

export type resultType = TVType & MovieType & person

const initialState = {
    isLoading: false,
    searchResults: null as unknown as CommonResType<resultType>
}
type initialStateType = typeof initialState

export const searchReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_SEARCH_RES:
            return {...state, searchResults: action.result}
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const searchActions = {
    setSearchRes: (result: CommonResType<resultType>) => ({type: SET_SEARCH_RES, result} as const),
    setLoading: (isLoading: boolean) => ({type: SET_LOADING, isLoading} as const),
}

export const GetMultiSearch = (searchString: string, page?: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(searchActions.setLoading(true))
        const result = await searchAPI.getMultiSearch(searchString, page)
        dispatch(searchActions.setSearchRes(result))
        dispatch(searchActions.setLoading(false))
    }
export const GetMovieSearch = (searchString: string, page?: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(searchActions.setLoading(true))
        const result = await searchAPI.getMovieSearch(searchString, page)
        dispatch(searchActions.setSearchRes(result))
        dispatch(searchActions.setLoading(false))
    }
export const GetTVShowsSearch = (searchString: string, page?: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(searchActions.setLoading(true))
        const result = await searchAPI.getTVShowsSearch(searchString, page)
        dispatch(searchActions.setSearchRes(result))
        dispatch(searchActions.setLoading(false))
    }
export const GetPeopleSearch = (searchString: string, page?: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(searchActions.setLoading(true))
        const result = await searchAPI.getPeopleSearch(searchString, page)
        dispatch(searchActions.setSearchRes(result))
        dispatch(searchActions.setLoading(false))
    }