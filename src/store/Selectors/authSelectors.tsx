import {RootStateType} from "../store";

export const getSessionId = (state:RootStateType) => {
    return state.auth.sessionId
}