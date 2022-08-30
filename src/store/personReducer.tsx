import {Dispatch} from "redux";
import {ActionTypes} from "./store";
import {personDetails, popularPeople} from "../API/PersoneAPI/PersonTypes";
import {personAPI} from "../API/PersoneAPI/PersonAPI";
import {CommonResType} from "../API/accountAPI/accountTypes";

const SET_PERSON_DETAILS = "person/SET_PERSON_DETAILS"
const SET_LOADING = "person/SET_SET_LOADING"
const SET_POPULAR_PERSONS = "person/SET_POPULAR_PERSONS"

const initialState = {
    personDetails: {} as personDetails,
    isLoading: false,
    popularPersons: {} as  CommonResType<popularPeople>
}
type initialStateType = typeof initialState

export const PersonReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_PERSON_DETAILS:
            return {...state, personDetails: action.personDetails}
        case SET_LOADING:
            return {...state, isLoading : action.isLoading}
        case SET_POPULAR_PERSONS:
            return {...state, popularPersons : action.persons}
        default:
            return state
    }
}

export const PersonActions = {
    setPersonDetails: (personDetails: personDetails) => ({type: SET_PERSON_DETAILS, personDetails} as const),
    setPopularPerson: (persons: CommonResType<popularPeople>) => ({type: SET_POPULAR_PERSONS, persons} as const),
    setLoading: (isLoading:boolean) => ({type: SET_LOADING, isLoading} as const),
}

export const getPersonDetails = (id: number) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(PersonActions.setLoading(true))
    const res = await personAPI.getPersonDetails(id)
    dispatch(PersonActions.setPersonDetails(res))
    dispatch(PersonActions.setLoading(false))
}
export const getPopularPerson = () => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(PersonActions.setLoading(true))
    const persons = await personAPI.getPopularPersons()
    dispatch(PersonActions.setPopularPerson(persons))
    dispatch(PersonActions.setLoading(false))
}