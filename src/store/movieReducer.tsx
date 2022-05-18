import {Dispatch} from "redux";
import {ActionTypes} from "./store";
import {movieDetailsType} from "../API/movieAPI/movieTypes";
import {movieAPI} from "../API/movieAPI/movieAPI";

const SET_MOVIE_DETAILS = "movie/SET_MOVIE_DETAILS"

const initialState = {
    movieDetails: {} as movieDetailsType
}
type initialStateType = typeof initialState

export const MovieReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_MOVIE_DETAILS:
            return {...state, movieDetails: action.movieDetails}
        default:
            return state
    }
}

export const movieActions = {
    setMovieDetails: (movieDetails:movieDetailsType) => ({type: SET_MOVIE_DETAILS, movieDetails} as const),

}


export const getMovieDetails = (id:number) => async (dispatch: Dispatch<ActionTypes>) => {
    const res  = await movieAPI.getMovieDetails(id)
    dispatch(movieActions.setMovieDetails(res))
    console.log(res)
}

