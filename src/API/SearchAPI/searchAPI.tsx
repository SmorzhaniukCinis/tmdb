import {instanceV4} from "../index";
import {searchRes} from "./searchTypes";


export const searchAPI = {
    getList: async (searchString: string, page: number): Promise<searchRes> => {
        const {data} = await instanceV4.get<searchRes>(`/search/multi?query=${searchString}&page=${page}`)
        return data
    },
}