import {instance} from "../index";
import {createRequestTokenType, createSessionType} from "./authTypes";



export const authAPI = {
    createRequestToken: async ():Promise<createRequestTokenType> => {
        const {data} = await instance.get<createRequestTokenType>(`authentication/token/new`)
        return data
    },
    createSession: async (token:string):Promise<createSessionType> => {
        const {data} = await instance.post<createSessionType>(`authentication/session/new`, {
            "request_token": token
        } )
        return data
    }
}


