import {RootStateType} from "../store";

export const getResults = (state: RootStateType) => {
    return state.search.searchResults
}