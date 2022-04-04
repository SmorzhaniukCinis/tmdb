import {RootStateType} from "../store";

export const getSessionId = (state:RootStateType) => {
    return state.auth.sessionId
}
export const getIsLoadingForStep1 = (state:RootStateType) => {
    return state.auth.loadingForStep1
}
export const getRequestToken = (state:RootStateType) => {
    return state.auth.requestToken
}