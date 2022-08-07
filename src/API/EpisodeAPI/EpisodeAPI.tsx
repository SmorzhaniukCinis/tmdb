import {instance} from "../index";
import {EpisodeStats, ratingStatus} from "./EpisodeTypes";


export const episodeAPI = {
    getEpisodeAccountStats: async (tv_id: number, seasonNum: number, episodeNum: number): Promise<EpisodeStats> => {
        const {data} = await instance.get<EpisodeStats>
        (`/tv/${tv_id}/season/${seasonNum}/episode/${episodeNum}/account_states`)
        return data
    },
    rateEpisode:
        async (tv_id: number, seasonNum: number, episodeNum: number, newRating: number): Promise<ratingStatus> => {
            const {data} = await instance.post<ratingStatus>
            (`/tv/${tv_id}/season/${seasonNum}/episode/${episodeNum}/rating`, {
                value: newRating
            })
            return data
        },
}