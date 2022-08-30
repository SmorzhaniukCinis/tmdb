import {RootStateType} from "../store";

export const getPersonDetailsSelector = (state:RootStateType) => {
    return state.person.personDetails
}
export const getIsLoading = (state:RootStateType) => {
    return state.person.isLoading
}
export const getPopularPersons = (state:RootStateType) => {
    return state.person.popularPersons
}