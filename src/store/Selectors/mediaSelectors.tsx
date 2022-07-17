import {RootStateType} from "../store";

export const getCredits = (state:RootStateType) => {
  return state.media.credits
}
export const getIsLoading = (state:RootStateType) => {
  return state.media.isLoading
}