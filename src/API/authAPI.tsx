import {instance, key} from "./index";


export const createRequestToken = async () => {
    const response = await instance.get(`authentication/token/new?api_key=${key}` )
    return response.data
}



