import {RootStateType} from "../store";

export const getMovieDetailsSelector = (state:RootStateType) => {
  return state.movie.movieDetails
}
export const getIsRatingLoading = (state:RootStateType) => {
  return state.movie.isRatingLoading
}
export const getMovieStatsSelector = (state:RootStateType) => {
  return state.movie.movieStats
}
export const getNowPlayingMoviesSelector = (state:RootStateType) => {
  return state.movie.nowPlayingMovies
}
export const getUpcomingMoviesSelector = (state:RootStateType) => {
  return state.movie.upcomingMovies
}