import {instance} from "../index";
import {createGuestSession, createRequestTokenType, createSessionType, createSessionWithLoginType} from "./authTypes";
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
    createGuestSession: async (): Promise<createGuestSession> => {
        const {data} = await instance.get<createGuestSession>(`authentication/guest_session/new`)
        return data
    },
    deleteSession: async (sessionId:string): Promise<{success: boolean}> => {
        const {data} = await instance.delete<{success: boolean}>(`authentication/session`, {
            data: {
                session_id: sessionId
            }
        })
        return data
    },

    createSessionWithLogin: async (token: string, formData: formDataType): Promise<createSessionWithLoginType> => {
        try {
            const {data} = await instance.post<createSessionWithLoginType>(`authentication/token/validate_with_login`,
                {
                    "username": formData.username,
                    "password": formData.password,
                    "request_token": token
                })
            return data
        } catch (e: any) {
            return e.response.data
        }
    }
}


