import {RootStateType} from "../store";

export const getEpisodesRating = (state: RootStateType) => {
    return state.episode.episodesRating
}