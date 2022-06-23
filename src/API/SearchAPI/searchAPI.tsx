import {instance, instanceV4} from "../index";
import {searchRes} from "./searchTypes";


export const searchAPI = {
    getMultiSearch: async (searchString: string, page?: number): Promise<searchRes> => {
        const {data} = await instanceV4.get<searchRes>(`/search/multi?query=${searchString}&page=${page}`)
        return data
    },
    getMovieSearch: async (searchString: string, page?: number):Promise<searchRes> => {
        const {data} = await instance.get<searchRes>(`search/movie?query=${searchString}&page=${page}`)
        return data
    },
    getTVShowsSearch: async (searchString: string, page?: number):Promise<searchRes> => {
        const {data} = await instance.get<searchRes>(`search/tv?query=${searchString}&page=${page}`)
        return data
    },
    getPeopleSearch: async (searchString: string, page?: number):Promise<searchRes> => {
        const {data} = await instance.get<searchRes>(`/search/person?query=${searchString}&page=${page}`)
        return data
    }
}