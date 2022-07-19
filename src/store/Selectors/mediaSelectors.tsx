import {RootStateType} from "../store";

export const getMediaCreditsSelector = (state:RootStateType) => {
  return state.media.credits
}
export const getIsLoading = (state:RootStateType) => {
  return state.media.isLoading
}
export const getMediaDetailsSelector = (state:RootStateType) => {
  return state.media.details
}