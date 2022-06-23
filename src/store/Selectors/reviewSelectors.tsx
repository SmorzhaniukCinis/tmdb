import {RootStateType} from "../store";

export const getReview = (state:RootStateType) => {
  return state.review.Review
}
export const getIsLoading = (state:RootStateType) => {
  return state.review.isLoading
}