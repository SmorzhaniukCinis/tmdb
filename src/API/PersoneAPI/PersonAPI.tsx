import {instance} from "../index";
import {personDetails} from "./PersonTypes";

export const personAPI = {
    getPersonDetails: async (personId: number): Promise<personDetails> => {
        const {data} = await instance.get<personDetails>
        (`/person/${personId}?append_to_response=combined_credits,tagged_images`)
        console.log(data)
        return data
    },
}