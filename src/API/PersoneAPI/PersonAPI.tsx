import {instance} from "../index";
import {personDetails, popularPeople} from "./PersonTypes";
import {CommonResType} from "../accountAPI/accountTypes";

export const personAPI = {
    getPersonDetails: async (personId: number): Promise<personDetails> => {
        const {data} = await instance.get<personDetails>
        (`/person/${personId}?append_to_response=combined_credits,images`)
        return data
    },
    getPopularPersons: async (): Promise<CommonResType<popularPeople>> => {
        const {data} = await instance.get<CommonResType<popularPeople>>(`/person/popular`)
        return data
    },
}