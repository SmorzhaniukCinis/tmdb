import {instance} from "../index";
import {CreatedListType, DetailsType, getFavoriteMovie} from "./accountTypes";




export const accountAPI = {
    getDetails : async (sessionId:string):Promise<DetailsType> => {
        const {data} = await instance.get<DetailsType>(`account?session_id=${sessionId}`)
        return data
    },
    getCreatedList : async (sessionId:string, accountId?:string):Promise<CreatedListType> => {
        const {data} = await instance.get<CreatedListType>(`account/${accountId}/lists?session_id=${sessionId}`)
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