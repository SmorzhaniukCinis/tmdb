import {instance} from "../index";
import {rateTVRes, tvDetails, mediaStatsType} from "./TVTypes";


export const tvAPI = {
    getTVDetails: async (tv_id: number): Promise<tvDetails> => {
        const {data} = await instance.get<tvDetails>
        (`/tv/${tv_id}?append_to_response=content_ratings,credits,aggregate_credits,reviews,recommendations`)
        console.log(data)
        return data
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
}