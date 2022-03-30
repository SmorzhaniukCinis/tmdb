import {instance} from "./index";

export const authAPI = {
    createRequestToken: async () => {
        const response = await instance.get(`authentication/token/new`)
        return response.data
    },
    createSession:    async (token:string) => {
        const response = await instance.post(`authentication/session/new`, {
            "request_token": token
        } )
        return response.data
    }
}


