import {instance} from "../index";
import {getCreatedList, getDetailsType, getFavoriteMovie} from "./accountTypes";




export const accountAPI = {
    getDetails : async (sessionId:string):Promise<getDetailsType> => {
        const {data} = await instance.get<getDetailsType>(`account?session_id=${sessionId}`)
        return data
    },
    getCreatedList : async (sessionId:string, accountId?:string):Promise<getCreatedList> => {
        const {data} = await instance.get<getCreatedList>(`account/${accountId}/lists?session_id=${sessionId}`)
        return data
    },
    getFavoriteMovie : async (sessionId:string, accountId?:string):Promise<getFavoriteMovie> => {
        const {data} = await instance.get<getFavoriteMovie>(`account/${accountId}/favorite/movies`)
        return data
    },
     getFavoriteTVShow : async (sessionId:string, accountId?:string):Promise<getFavoriteMovie> => {
        const {data} = await instance.get<getFavoriteMovie>(`account/${accountId}/favorite/movies`)
        return data
    },

}