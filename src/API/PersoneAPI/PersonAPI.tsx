import {instance} from "../index";
import {personDetails} from "./PersonTypes";

export const personAPI = {
    getPersonDetails: async (personId: number): Promise<personDetails> => {
        const {data} = await instance.get<personDetails>
        (`/person/${personId}?append_to_response=videos,images,reviews,recommendations,similar,credits`)
        return data
    },
}