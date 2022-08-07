import {instance} from "../index";
import {EpisodeStats} from "./EpisodeTypes";


export const episodeAPI = {
    getEpisodeAccountStats: async (tv_id: number, seasonNum: number, episodeNum: number): Promise<EpisodeStats> => {
        const {data} = await instance.get<EpisodeStats>
        (`/tv/${tv_id}/season/${seasonNum}/episode/${episodeNum}/account_states`)
        return data
    },
}