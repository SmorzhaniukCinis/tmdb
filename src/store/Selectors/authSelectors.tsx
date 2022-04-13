import {RootStateType} from "../store";

export const getSessionId = (state:RootStateType) => {
    return state.auth.sessionId
}
export const getIsLoadingForSteps = (state:RootStateType) => {
    return state.auth.loadingForSteps
}
export const getRequestToken = (state:RootStateType) => {
    return state.auth.requestToken
}
export const getIsAuth = (state:RootStateType) => {
    return state.auth.isAuth
}
export const getErrorMessage = (state:RootStateType) => {
    return state.auth.errorMessage
}