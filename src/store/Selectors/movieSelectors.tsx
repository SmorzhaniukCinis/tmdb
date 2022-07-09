import {RootStateType} from "../store";

export const getMovieDetailsSelector = (state:RootStateType) => {
  return state.movie.movieDetails
}
export const getIsLoading = (state:RootStateType) => {
  return state.movie.isLoading
}
export const getIsRatingLoading = (state:RootStateType) => {
  return state.movie.isRatingLoading
}
export const getMovieStatsSelector = (state:RootStateType) => {
  return state.movie.movieStats
}