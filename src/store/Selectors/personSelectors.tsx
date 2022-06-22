import {RootStateType} from "../store";

export const getPersonDetails = (state:RootStateType) => {
    return state.person.personDetails
}
export const getIsLoading = (state:RootStateType) => {
    return state.person.isLoading
}