import {instance} from "../index";
import {createRequestTokenType, createSessionType, createSessionWithLoginType} from "./authTypes";
import {formDataType} from "../../components/auth-step1";


export const authAPI = {
    createRequestToken: async (): Promise<createRequestTokenType> => {
        const {data} = await instance.get<createRequestTokenType>(`authentication/token/new`)
        return data
    },
    createSession: async (token: string): Promise<createSessionType> => {
        const {data} = await instance.post<createSessionType>(`authentication/session/new`, {
            "request_token": token
        })
        return data
    },
    createSessionWithLogin: async (token: string, formData: formDataType) => {
        let data
        try {
            data = await instance.post<createSessionWithLoginType>(`authentication/token/validate_with_login`,
                {
                    "username": formData.username,
                    "password": formData.password,
                    "request_token": token
                })
            return data
        }
        catch (e) {
            // @ts-ignore
            console.log(e.name + e.message)
        }
        return data
    }
}


