import {Dispatch} from "redux";
import {ActionTypes} from "./store";
import {authAPI} from "../API/authAPI/authAPI";

const SET_SESSION_ID = "auth/SET_SESSION_ID"

const initialState = {
    sessionId: '',
}

type initialStateType = typeof initialState

export const AuthReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_SESSION_ID:
            return {...state, sessionId: action.sessionId}
        default:
            return state
    }
}

export const authActions = {
    setSessionId: (sessionId: string) => ({type: SET_SESSION_ID, sessionId} as const),
}

export const createRequestTokenThunk = () => async (dispatch: Dispatch<ActionTypes>) => {
    const res  = await authAPI.createRequestToken()
    if (res.success) {
        window.location.replace(
            `https://www.themoviedb.org/authenticate/${res.request_token}?redirect_to=http://localhost:3000`
        )
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

