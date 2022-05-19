import {RootStateType} from "../store";

export const getMovieDetailsSelector = (state:RootStateType) => {
  return state.movie.movieDetails
}