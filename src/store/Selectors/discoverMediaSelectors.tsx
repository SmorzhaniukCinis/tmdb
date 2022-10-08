import {RootStateType} from "../store";

export const getIsLoading = (state:RootStateType) => {
    return state.discoverMedia.isLoading
}
export const getCurrentMedia = (state:RootStateType) => {
    return state.discoverMedia.currentDiscoveringMedia
}