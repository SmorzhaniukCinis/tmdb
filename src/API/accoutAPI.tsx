import {instance} from "./index";

type getDetailsType = {
    "avatar": {
        "gravatar": {
            "hash": string
        }
    },
    "id": number,
    "iso_639_1": string
    "iso_3166_1": string
    "name": string
    "include_adult": boolean
    "username": string
}

export const accountAPI = {
    getDetails : async (sessionId:string):Promise<getDetailsType> => {
        const {data} = await instance.get<getDetailsType>(`account?session_id=${sessionId}`)
        return data
    }
}
