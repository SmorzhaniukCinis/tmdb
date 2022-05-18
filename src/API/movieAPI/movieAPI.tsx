import {instance} from "../index";
import {movieDetailsType} from "./movieTypes";

export const movieAPI = {
    getMovieDetails: async (movieId:number): Promise<movieDetailsType> => {
        const {data} = await instance.get<movieDetailsType>(`/movie/{movieId}`)
        return data
    },
}