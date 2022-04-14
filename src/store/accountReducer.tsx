import {Dispatch} from "redux";
import {ActionTypes, RootStateType} from "./store";
import {accountAPI} from "../API/accountAPI/accoutAPI";
import {CreatedListType, DetailsType} from "../API/accountAPI/accountTypes";

const SET_ACCOUNT_DETAILS = "account/SET_ACCOUNT_DETAILS"
const SET_DARK_THEME = "account/SET_DARK_THEME"
const SET_CREATED_LISTS = "account/SET_CREATED_LISTS"

const initialState : initialStateType = {
    details: {
        avatar: {
            gravatar: {
                hash: ''
            },
            tmdb: {
                avatar_path: ''
            }
        },
        id: 0,
        iso_639_1: '',
        iso_3166_1: '',
        name: '',
        include_adult: false,
        username: ''
    },
    isDarkTheme: false,
    createdLists: {
        page: 0,
        results: [
            {
                description: '',
                favorite_count: 0,
                id: 0,
                item_count: 0,
                iso_639_1: '',
                list_type: '',
                name: '',
                poster_path: null
            }
        ],
        total_pages: 0,
        total_results: 0
    },
}

type initialStateType = {
    details: DetailsType
    isDarkTheme: boolean,
    createdLists: CreatedListType
}

export const AccountReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_ACCOUNT_DETAILS:
            return {...state, details: action.payload}
        case SET_DARK_THEME:
            return {...state, isDarkTheme: action.payload}
        case SET_CREATED_LISTS:
            return {...state, createdLists: action.createdLists}
        default:
            return state
    }
}

export const accountActions = {
    setAccountDetails: (payload: DetailsType) => ({type: SET_ACCOUNT_DETAILS, payload} as const),
    setDarkTheme: (payload: boolean) => ({type: SET_DARK_THEME, payload} as const),
    setCreatedLists: (createdLists:CreatedListType) => ({type: SET_CREATED_LISTS, createdLists} as const),
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

