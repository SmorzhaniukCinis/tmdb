import {instance} from "../index";
import {reviewType} from "./ReviewTypes";


export const reviewAPI = {
    getReview: async (id: string):Promise<reviewType> => {
        const {data} = await instance.get<reviewType>(`/review/${id}`)
        return data
    },

}