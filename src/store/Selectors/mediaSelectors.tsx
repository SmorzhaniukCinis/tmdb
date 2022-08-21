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
export const getMediaImagesSelector = (state:RootStateType) => {
  return state.media.images
}
export const getPopularMediaSelector = (state:RootStateType) => {
  return state.media.popular
}
export const getTopRatedMediaSelector = (state:RootStateType) => {
  return state.media.topRated
}