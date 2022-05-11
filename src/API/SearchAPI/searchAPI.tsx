import {instance, instanceV4} from "../index";
import {MovieType, searchRes} from "./searchTypes";
import {CommonResType} from "../accountAPI/accountTypes";


export const searchAPI = {
    getMultiSearch: async (searchString: string, page?: number): Promise<searchRes> => {
        const {data} = await instanceV4.get<searchRes>(`/search/multi?query=${searchString}&page=${page}`)
        return data
    },
    getMovieSearch: async (searchString: string, page?: number):Promise<searchRes> => {
        const {data} = await instance.get<searchRes>(`search/movie?query=${searchString}&page=${page}`)
        return data
    }
}