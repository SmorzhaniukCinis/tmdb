import {instance} from "../index";
import {accountStats, movieDetailsType, rateMovieRes} from "./movieTypes";

export const movieAPI = {
    getMovieDetails: async (movieId: number): Promise<movieDetailsType> => {
        const {data} = await instance.get<movieDetailsType>
        (`/movie/${movieId}?append_to_response=videos,images,reviews,recommendations,similar,credits`)
        console.log(data)
        return data
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
}