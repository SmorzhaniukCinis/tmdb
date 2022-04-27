import {Dispatch} from "redux";
import {ActionTypes, RootStateType} from "./store";
import {authAPI} from "../API/authAPI/authAPI";
import {formDataType} from "../components/auth-step1";

const SET_SESSION_ID = "auth/SET_SESSION_ID"
const SET_LOADING_FOR_STEP1 = "auth/SET_LOADING_FOR_STEP1"
const SET_REQUEST_TOKEN = "auth/SET_REQUEST_TOKEN"
const SET_AUTHENTICATION = "auth/SET_AUTHENTICATION"
const SET_MESSAGE_ERROR = "auth/SET_MESSAGE_ERROR"
const SET_GUEST_SESSION_ID = "auth/SET_GUEST_SESSION_ID"

const initialState = {
    requestToken: '',
    sessionId: '',
    loadingForSteps: false,
    isAuth: false,
    errorMessage: '',
    guestSessionId: ''
}
type initialStateType = typeof initialState

export const AuthReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_SESSION_ID:
            return {...state, sessionId: action.sessionId}
        case SET_LOADING_FOR_STEP1:
            return {...state, loadingForSteps: action.isLoading}
        case SET_REQUEST_TOKEN:
            return {...state, requestToken: action.token}
        case SET_AUTHENTICATION:
            return {...state, isAuth: action.isAuth}
        case SET_MESSAGE_ERROR:
            return {...state, errorMessage: action.message}
        case SET_GUEST_SESSION_ID:
            return {...state, guestSessionId: action.id}
        default:
            return state
    }
}

export const authActions = {
    setSessionId: (sessionId: string) => ({type: SET_SESSION_ID, sessionId} as const),
    setGuestSessionId: (id: string) => ({type: SET_GUEST_SESSION_ID, id} as const),
    setLoadingForSteps: (isLoading:boolean) => ({type: SET_LOADING_FOR_STEP1, isLoading} as const),
    setRequestToken: (token:string) => ({type: SET_REQUEST_TOKEN, token} as const),
    setAuthentication: (isAuth:boolean) => ({type: SET_AUTHENTICATION, isAuth} as const),
    setMessageError: (message:string) => ({type: SET_MESSAGE_ERROR, message} as const),
}


export const createRequestToken = () => async (dispatch: Dispatch<ActionTypes>) => {
    const res  = await authAPI.createRequestToken()
    if (res.success) {
       dispatch(authActions.setRequestToken(res.request_token))
    }
}
export const createSessionId = () => async (dispatch: Dispatch<ActionTypes>, getState:()=>RootStateType) => {
    dispatch(authActions.setLoadingForSteps(true))
    const token = getState().auth.requestToken
    const res = await authAPI.createSession(token)
    if (res.success) {
        dispatch(authActions.setSessionId(res.session_id))
        localStorage.setItem('sessionId', res.session_id)
        dispatch(authActions.setLoadingForSteps(false))
    }
}
export const createGuestSessionId = () => async (dispatch: Dispatch<ActionTypes>) => {
    const res = await authAPI.createGuestSession()
    dispatch(authActions.setGuestSessionId(res.guest_session_id))
}

export const deleteSessionId = () => async (dispatch: Dispatch<ActionTypes>, getState:()=>RootStateType) => {
    const sessionId = getState().auth.sessionId
    const res = await authAPI.deleteSession(sessionId)
    if (res.success) {
     console.log('work)')
    }
    localStorage.removeItem('sessionId')
    dispatch(authActions.setSessionId(''))
    dispatch(authActions.setAuthentication(false))
}
export const authentication = (formData:formDataType) => async (dispatch: Dispatch<ActionTypes>, getState:()=>RootStateType) => {
    dispatch(authActions.setLoadingForSteps(true))
    const res = await authAPI.createSessionWithLogin( getState().auth.requestToken, formData)
    console.log(res)
        if(res.success) {
            dispatch(authActions.setAuthentication(true))
            dispatch(authActions.setLoadingForSteps(false))
        } else if(res.status_code === 30) {
            dispatch(authActions.setMessageError(res.status_message))
            dispatch(authActions.setLoadingForSteps(false))
        }
}

