import {instance} from "../index";
import {accountStats, commonMediaCredits, movieDetailsType, popularMovie, rateMovieRes} from "./movieTypes";
import {mediaImagesType, MinimizedMediaDetails} from "../../Common/types";
import {tvDetails} from "../TVAPI/TVTypes";
import {CommonResType} from "../accountAPI/accountTypes";

export const movieAPI = {
    getMovieDetails: async (movieId: number): Promise<movieDetailsType> => {
        const {data} = await instance.get<movieDetailsType>
        (`/movie/${movieId}?append_to_response=videos,images,reviews,recommendations,similar,credits`)
        return data
    },
    getMovieImages: async (movieId: number): Promise<mediaImagesType> => {
        const {data} = await instance.get<mediaImagesType>
        (`/movie/${movieId}/images`)
        return data
    },
    getMinimizedMovieDetails:  async (movieId: number): Promise<MinimizedMediaDetails> => {
        const {data} = await instance.get<movieDetailsType>
        (`/movie/${movieId}`)
        return {
            mediaType: 'movie',
            id: data.id,
            title: data.title,
            releaseDate: data.release_date
        }
    },
    getAccountMovieStats: async (movieId: number, sessionId: string): Promise<accountStats> => {
        const {data} = await instance.get<accountStats>(`/movie/${movieId}/account_states?session_id=${sessionId}`)
        return data
    },
    rateMovie: async (value:number,movieId: number, sessionId: string): Promise<rateMovieRes> => {
        const {data} = await instance.post<rateMovieRes>(`/movie/${movieId}/rating?session_id=${sessionId}`,
            {
                "value": value
            })
        return data
    },
    deleteMovieRating: async (movieId: number, sessionId: string): Promise<rateMovieRes> => {
        const {data} = await instance.delete<rateMovieRes>(`/movie/${movieId}/rating?session_id=${sessionId}`)
        return data
    },
    getCredits: async (tv_id: number): Promise<commonMediaCredits> => {
        const {data} = await instance.get<commonMediaCredits>(`/movie/${tv_id}/credits`)
        return data
    },
    getPopularMovie: async (): Promise<CommonResType<popularMovie>> => {
        const {data} = await instance.get<CommonResType<popularMovie>>(`/movie/popular`)
        return data
    },
}
