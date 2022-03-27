import {instance, key} from "./index";


export const createRequestToken = async () => {
    const response = await instance.get(`authentication/token/new?api_key=${key}` )
    return response.data
}
export const createSession = async (token:string) => {
    const response = await instance.post(`authentication/session/new?api_key=${key}`, {
        "request_token": token
    } )
    return response.data
}



