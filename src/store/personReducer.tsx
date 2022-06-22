import {Dispatch} from "redux";
import {ActionTypes, RootStateType} from "./store";
import {personDetails} from "../API/PersoneAPI/PersonTypes";
import {personAPI} from "../API/PersoneAPI/PersonAPI";

const SET_PERSON_DETAILS = "person/SET_PERSON_DETAILS"
const SET_LOADING = "person/SET_SET_LOADING"

const initialState = {
    personDetails: {} as personDetails,
    isLoading: false
}
type initialStateType = typeof initialState

export const PersonReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_PERSON_DETAILS:
            return {...state, personDetails: action.personDetails}
        case SET_LOADING:
            return {...state, isLoading : action.isLoading}
        default:
            return state
    }
}

export const PersonActions = {
    setPersonDetails: (personDetails: personDetails) => ({type: SET_PERSON_DETAILS, personDetails} as const),
    setLoading: (isLoading:boolean) => ({type: SET_LOADING, isLoading} as const),
}

export const getMovieDetails = (id: number) => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateType) => {
    dispatch(PersonActions.setLoading(true))
    const res = await personAPI.getPersonDetails(id)
    dispatch(PersonActions.setPersonDetails(res))
    dispatch(PersonActions.setLoading(false))
}