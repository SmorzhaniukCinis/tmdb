import {RootStateType} from "../store";

export const getList = (state: RootStateType) => {
    return state.list.listDetails
}
export const getIsLoading = (state: RootStateType) => {
    return state.list.isLoading
}