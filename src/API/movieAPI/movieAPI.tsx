import {instance} from "../index";
import {movieDetailsType} from "./movieTypes";

export const movieAPI = {
    getMovieDetails: async (movieId:number): Promise<movieDetailsType> => {
        const {data} = await instance.get<movieDetailsType>(`/movie/${movieId}?append_to_response=videos,images,reviews,recommendations,similar`)
        return data
    },
}