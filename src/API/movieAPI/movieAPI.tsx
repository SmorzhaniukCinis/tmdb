import {instance} from "../index";
import {accountStats, movieDetailsType} from "./movieTypes";

export const movieAPI = {
    getMovieDetails: async (movieId:number): Promise<movieDetailsType> => {
        const {data} = await instance.get<movieDetailsType>
        (`/movie/${movieId}?append_to_response=videos,images,reviews,recommendations,similar,credits`)
        console.log(data)
        return data
    },
    getAccountMovieStats: async (movieId:number, sessionId:string): Promise<accountStats> => {
        const {data} = await instance.get<accountStats>(`/movie/${movieId}/account_states?session_id=${sessionId}`)
        return data
    },
}