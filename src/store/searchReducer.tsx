import {ActionTypes, RootStateType} from "./store";
import {createListData, editListData, listType} from "../API/ListAPI/listTypes";
import {listAPI} from "../API/ListAPI/ListAPI";
import {Dispatch} from "redux";
import {MovieType, person, TVType} from "../API/SearchAPI/searchTypes";
import {searchAPI} from "../API/SearchAPI/searchAPI";
import {CommonResType} from "../API/accountAPI/accountTypes";

const SET_SEARCH_RES = 'search/SET_SEARCH_RES'
const SET_LOADING = 'search/SET_LOADING'

type result = TVType & MovieType & person

const initialState = {
    isLoading: false,
    results: null as unknown as CommonResType<result>
}
type initialStateType = typeof initialState

export const searchReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_SEARCH_RES:
            return {...state,}
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const searchActions = {
    setSearchRes: (result: CommonResType<result>) => ({type: SET_SEARCH_RES, result} as const),
    setLoading: (isLoading: boolean) => ({type: SET_LOADING, isLoading} as const),
}

export const GetList = (searchString: string, page: number) =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        dispatch(searchActions.setLoading(true))
        const result = await searchAPI.getMultiSearch(searchString, page)
        dispatch(searchActions.setSearchRes(result))
        dispatch(searchActions.setLoading(false))
    }