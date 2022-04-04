import {Dispatch} from "redux";
import {ActionTypes} from "./store";
import {authAPI} from "../API/authAPI/authAPI";

const SET_SESSION_ID = "auth/SET_SESSION_ID"
const SET_LOADING_FOR_STEP1 = "auth/SET_LOADING_FOR_STEP1"
const SET_REQUEST_TOKEN = "auth/SET_REQUEST_TOKEN"

const initialState = {
    requestToken: '',
    sessionId: '',
    loadingForStep1: true
}

type initialStateType = typeof initialState

export const AuthReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_SESSION_ID:
            return {...state, sessionId: action.sessionId}
        case SET_LOADING_FOR_STEP1:
            return {...state, loadingForStep1: action.isLoading}
        case SET_REQUEST_TOKEN:
            return {...state, requestToken: action.token}
        default:
            return state
    }
}

export const authActions = {
    setSessionId: (sessionId: string) => ({type: SET_SESSION_ID, sessionId} as const),
    setLoadingForStep1: (isLoading:boolean) => ({type: SET_LOADING_FOR_STEP1, isLoading} as const),
    setRequestToken: (token:string) => ({type: SET_REQUEST_TOKEN, token} as const)
}

export const createRequestToken = () => async (dispatch: Dispatch<ActionTypes>) => {
    const res  = await authAPI.createRequestToken()
    if (res.success) {
       dispatch(authActions.setLoadingForStep1(false))
       dispatch(authActions.setRequestToken(res.request_token))
    }
}
export const createSessionId = (request_token: string) => async (dispatch: Dispatch<ActionTypes>) => {
    const res = await authAPI.createSession(request_token)
    if (res.success) {
        dispatch(authActions.setSessionId(res.session_id))
    }
}
export const authentication = (request_token: string) => async (dispatch: Dispatch<ActionTypes>) => {
    const res = await authAPI.createSessionWithLogin(request_token)
    console.log(res)
}

