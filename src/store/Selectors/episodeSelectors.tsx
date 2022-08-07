import {RootStateType} from "../store";
import {EpisodeStats} from "../../API/EpisodeAPI/EpisodeTypes";

export const getEpisodesRating = (state: RootStateType) => {
    return state.episode.episodesRating.map( item => createCommonRating(item) )

}

const createCommonRating = (item: EpisodeStats) => {
    if(item.rated !== false) {
        return {
            rating: item.rated.value,
            id: item.id
        }
    }
    return {
        rating: item.rated,
        id: item.id
    }
}