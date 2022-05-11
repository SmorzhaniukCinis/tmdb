import {RootStateType} from "../store";

export const getResults = (state: RootStateType) => {
    return state.search.searchResults
}
export const getIsLoading = (state: RootStateType) => {
    return state.search.isLoading
}