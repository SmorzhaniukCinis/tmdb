import {RootStateType} from "../store";

export const getCreditsSelector = (state:RootStateType) => {
  return state.media.credits
}
export const getIsLoading = (state:RootStateType) => {
  return state.media.isLoading
}