import {instance} from "../index";
import {accountStats, commonMediaCredits, movieDetailsType, rateMovieRes} from "./movieTypes";
import {MinimizedMediaDetails} from "../../Common/types";
import {tvDetails} from "../TVAPI/TVTypes";

export const movieAPI = {
    getMovieDetails: async (movieId: number): Promise<movieDetailsType> => {
        const {data} = await instance.get<movieDetailsType>
        (`/movie/${movieId}?append_to_response=videos,images,reviews,recommendations,similar,credits`)
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
}
