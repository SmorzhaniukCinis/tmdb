import {instance} from "../index";
import {mediaStatsType, popularTV, rateTVRes, seasonDetails, tvDetails} from "./TVTypes";
import {commonMediaCredits} from "../movieAPI/movieTypes";
import {mediaCardType, mediaImagesType, MinimizedMediaDetails} from "../../Common/types";
import {CommonResType} from "../accountAPI/accountTypes";


export const tvAPI = {
    getTVDetails: async (tv_id: number): Promise<tvDetails> => {
        const {data} = await instance.get<tvDetails>
        (`/tv/${tv_id}?append_to_response=content_ratings,credits,images,aggregate_credits,reviews,recommendations`)
        return data
    },
    getTVSeason: async (tv_id: number,season_number: number): Promise<seasonDetails> => {
        const {data} = await instance.get<seasonDetails>
        (`/tv/${tv_id}/season/${season_number}?append_to_response=account_states,`)
        return data
    },
    getTVImages: async (tv_id: number): Promise<mediaImagesType> => {
        const {data} = await instance.get<mediaImagesType>
        (`/tv/${tv_id}/images`)
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
    getPopularTVShow: async (): Promise<mediaCardType[]> => {
        const {data} = await instance.get<CommonResType<popularTV>>(`/tv/popular`)
        return data.results.map( tvShow => getTVShowMainInfo(tvShow))
    },
    getTopRatedTVShow: async (): Promise<mediaCardType[]> => {
        const {data} = await instance.get<CommonResType<popularTV>>(`/tv/top_rated`)
        return data.results.map( tvShow => getTVShowMainInfo(tvShow))
    },
}

const getTVShowMainInfo = (TVShow:popularTV):mediaCardType => {
    return {
        voteAverage: TVShow.vote_average,
        name: TVShow.name,
        date: TVShow.first_air_date,
        type: 'tv',
        overview: TVShow.overview,
        posterPath: TVShow.poster_path,
        voteCount: TVShow.vote_count,
        id: TVShow.id
    }
}