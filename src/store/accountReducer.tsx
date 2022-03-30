import {Dispatch} from "redux";
import {ActionTypes, RootStateType} from "./store";
import {accountAPI} from "../API/accountAPI/accoutAPI";

const SET_ACCOUNT_DETAILS = "account/SET_ACCOUNT_DETAILS"

const initialState = {
    data: {
        avatar: {
            gravatar: {
                hash: null
            }
        },
        id: null,
        iso_639_1: null,
        iso_3166_1: null,
        name: null,
        include_adult: null,
        username: null
    }
}

type initialStateType = typeof initialState

export const AccountReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_ACCOUNT_DETAILS:
            return {...state, data: action.res}
        default:
            return state
    }
}

export const accountActions = {
    setAccountDetails: (res:any) => ({type: SET_ACCOUNT_DETAILS, res} as const),
}

export const getAccountInfo = () =>
    async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
        const state = getState()
        const res = await accountAPI.getDetails(state.auth.sessionId)
        dispatch(accountActions.setAccountDetails(res))
    }

