import {instance, instanceForPicture} from "../index";
import {getDetailsType} from "./accountTypes";



export const accountAPI = {
    getDetails : async (sessionId:string):Promise<getDetailsType> => {
        const {data} = await instance.get<getDetailsType>(`account?session_id=${sessionId}`)
        return data
    },

}
