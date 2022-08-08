import {Dispatch} from "redux";
import {ActionTypes} from "./store";
import {episodeAPI} from "../API/EpisodeAPI/EpisodeAPI";
import {EpisodeStats} from "../API/EpisodeAPI/EpisodeTypes";


const SET_RATING = "episode/SET_RATING"
const DELETE_RATING = "episode/DELETE_RATING"
const UPDATE_RATING = "episode/UPDATE_RATING"
const SET_IS_RATING_FETCHING = "episode/SET_IS_RATING_FETCHING"


const initialState = {
    episodesRating: [] as EpisodeStats[],
    isRatingFetching: true
}

type initialStateType = typeof initialState

export const EpisodeReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_RATING:
            return {...state, episodesRating: [...action.rating]}
        case DELETE_RATING:
            return {...state, episodesRating: []}
        case SET_IS_RATING_FETCHING:
            return {...state, isRatingFetching: action.isLoading}
        case UPDATE_RATING:
            return {
                ...state,
                episodesRating: [...state.episodesRating.filter(item => item.id !== action.episodeId),
                    {id: action.episodeId, rated: action.newRating}
                ]
            }
        default:
            return state
    }
}

export const episodeActions = {
    setEpisodeRating: (rating: EpisodeStats[]) => ({type: SET_RATING, rating} as const),
    setIsRatingFetching: (isLoading: boolean) => ({type: SET_IS_RATING_FETCHING, isLoading} as const),
    deleteEpisodesRating: () => ({type: DELETE_RATING} as const),
    updateEpisodeRating: (newRating: { value: number } | false, episodeId: number) => ({
        type: UPDATE_RATING,
        newRating,
        episodeId
    } as const),
}

export const getEpisodeStats = (mediaId: number, seasonNumber: number, episodeCount: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(episodeActions.setIsRatingFetching(true))
        const arr = []
        for (let i = 1; i <= episodeCount; i++) {
            const episodeRating = await episodeAPI.getEpisodeAccountStats(mediaId, seasonNumber, i)
            arr.push(episodeRating)
        }
        dispatch((episodeActions.setEpisodeRating(arr)))
        dispatch(episodeActions.setIsRatingFetching(false))
    }
export const rateEpisode =
    (mediaId: number, seasonNumber: number, episodeNumber: number, newRating: number, episodeId: number | undefined) =>
        async (dispatch: Dispatch<ActionTypes>) => {
            const response = await episodeAPI.rateEpisode(mediaId, seasonNumber, episodeNumber, newRating)
            if (response.success && episodeId) {
                dispatch(episodeActions.updateEpisodeRating({value: newRating}, episodeId))
            }
        }
export const DeleteEpisodeRating =
    (mediaId: number, seasonNumber: number, episodeNumber: number, episodeId: number | undefined) =>
        async (dispatch: Dispatch<ActionTypes>) => {
            const response = await episodeAPI.DeleteEpisodeRating(mediaId, seasonNumber, episodeNumber)
            if (response.success && episodeId) {
                dispatch(episodeActions.updateEpisodeRating(false, episodeId))
            }
        }

