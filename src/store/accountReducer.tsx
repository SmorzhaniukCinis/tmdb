import {Dispatch} from "redux";
import {ActionTypes, RootStateType} from "./store";
import {accountAPI} from "../API/accountAPI/accoutAPI";

const SET_ACCOUNT_DETAILS = "account/SET_ACCOUNT_DETAILS"
const SET_DARK_THEME = "account/SET_DARK_THEME"

const initialState = {
    details: {
        avatar: {
            gravatar: {
                hash: null
            },
            tmdb: {
                avatar_path: null
            }
        },
        id: null,
        iso_639_1: null,
        iso_3166_1: null,
        name: null,
        include_adult: null,
        username: null
    },
    isDarkTheme: false
}

type initialStateType = typeof initialState

export const AccountReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_ACCOUNT_DETAILS:
            return {...state, details: action.payload}
        case SET_DARK_THEME:
            return {...state, isDarkTheme: action.payload}
        default:
            return state
    }
}

export const accountActions = {
    setAccountDetails: (payload: any) => ({type: SET_ACCOUNT_DETAILS, payload} as const),
    setDarkTheme: (payload: any) => ({type: SET_DARK_THEME, payload} as const),
}

export const getAccountInfo = () => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    const sessionId = getState().auth.sessionId
    const res = await accountAPI.getDetails(sessionId)
    dispatch(accountActions.setAccountDetails(res))
}
export const getCreatedList = () => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    const sessionId = getState().auth.sessionId
    const res = await accountAPI.getCreatedList(sessionId)
    console.log(res)
}

