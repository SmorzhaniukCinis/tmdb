import {instance} from "../index";
import {mediaStatsType, rateTVRes, tvDetails} from "./TVTypes";
import {commonMediaCredits} from "../movieAPI/movieTypes";
import {MinimizedMediaDetails} from "../../Common/types";


export const tvAPI = {
    getTVDetails: async (tv_id: number): Promise<tvDetails> => {
        const {data} = await instance.get<tvDetails>
        (`/tv/${tv_id}?append_to_response=content_ratings,credits,images,aggregate_credits,reviews,recommendations`)
        return data
    },
    getMinimizedTVDetails: async (tv_id: number): Promise<MinimizedMediaDetails> => {
        const {data} = await instance.get<tvDetails>
        (`/tv/${tv_id}`)
        return {
            mediaType: 'tv',
            id: data.id,
            title: data.name,
            releaseDate: data.first_air_date
        }
    },
    rateTVShow: async (tv_id: number, value:number, sessionId:string): Promise<rateTVRes> => {
        const {data} = await instance.post<rateTVRes>(`/tv/${tv_id}/rating?session_id=${sessionId}`, {
            value
        })
        return data
    },
    getTVShowStats: async (tv_id: number, sessionId:string): Promise<mediaStatsType> => {
        const {data} = await instance.get<mediaStatsType>(`/tv/${tv_id}/account_states?session_id=${sessionId}`)
        return data
    },
    deleteTVShowRating: async (tv_id: number, sessionId:string): Promise<rateTVRes> => {
        const {data} = await instance.delete<rateTVRes>(`/tv/${tv_id}/rating?session_id=${sessionId}`)
        return data
    },
    getCredits: async (tv_id: number): Promise<commonMediaCredits> => {
        const {data} = await instance.get<commonMediaCredits>(`/tv/${tv_id}/credits`)
        return data
    },
}