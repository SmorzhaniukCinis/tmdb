import {instance} from "../index";
import {tvDetails} from "./TVTypes";


export const tvAPI = {
    getTVDetails: async (TV_Id: number): Promise<tvDetails> => {
        const {data} = await instance.get<tvDetails>(`/tv/${TV_Id}?append_to_response=content_ratings,credits`)
        return data
    }
}