import {Dispatch} from "redux";
import {ActionTypes, RootStateType} from "./store";
import {accountAPI} from "../API/accountAPI/accoutAPI";
import {concat} from 'lodash';
import {
    CommonResType,
    createdList,
    DetailsType,
    FavoriteMovie,
    FavoriteTVShow,
    MovieWatchList,
    ratedMovies,
    ratedTVEpisodes,
    ratedTVShow,
    TVShowWatchList
} from "../API/accountAPI/accountTypes";
import {movieAPI} from "../API/movieAPI/movieAPI";
import {movieActions} from "./movieReducer";
import {episodeAPI} from "../API/EpisodeAPI/EpisodeAPI";
import {EpisodeStats} from "../API/EpisodeAPI/EpisodeTypes";


const SET_RATING = "episode/SET_RATING"


const initialState = {
    episodesRating: [] as EpisodeStats[]
}

type initialStateType = typeof initialState

export const EpisodeReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {

        case SET_RATING:
            return {...state, episodesRating: [...state.episodesRating, action.rating]}
        default:
            return state
    }
}

export const episodeActions = {
    setEpisodeRating: (rating: EpisodeStats) => ({type: SET_RATING, rating} as const),
}

export const getEpisodeStats = (mediaId: number, seasonNumber: number, episodeNumber: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        const episodeRating = await episodeAPI.getEpisodeAccountStats(mediaId, seasonNumber, episodeNumber)
        dispatch((episodeActions.setEpisodeRating(episodeRating)))
    }

