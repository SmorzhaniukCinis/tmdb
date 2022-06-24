import {ActionTypes} from "./store";
import {Dispatch} from "redux";
import {tvAPI} from "../API/TVAPI/TVAPI";
import {tvDetails} from "../API/TVAPI/TVTypes";

const SET_LOADING = 'tv/SET_LOADING'
const SET_TV_DETAILS = 'tv/SET_TV_DETAILS'


const initialState = {
    isLoading: false,
    tvDetails: {} as tvDetails
}
type initialStateType = typeof initialState

export const TVReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        case SET_TV_DETAILS:
            return {...state, tvDetails: action.tvDetails}
        default:
            return state
    }
}

export const tvActions = {
    setLoading: (isLoading: boolean) => ({type: SET_LOADING, isLoading} as const),
    setTVDetails: (tvDetails: tvDetails) => ({type: SET_TV_DETAILS, tvDetails} as const),
}

export const GetTVDetails = (TVid:number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(tvActions.setLoading(true))
        const result = await tvAPI.getTVDetails(TVid)
        dispatch(tvActions.setTVDetails(result))
        dispatch(tvActions.setLoading(false))
        console.log(result)
    }