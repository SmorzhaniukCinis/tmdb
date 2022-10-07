import {instance, instanceV4} from "../index";
import {
    addListItemRes,
    createListData,
    createListRes, deleteListItem,
    deleteListRes,
    editListData,
    listItemType,
    listType
} from "./listTypes";
import {mediaType} from "../../Common/types";


export const listAPI = {
    getList: async (listId: number): Promise<listType> => {
        const {data} = await instanceV4.get<listType>(`/list/${listId}`)
        return data

    },
    createList: async (listData: createListData): Promise<createListRes> => {
        const {data} = await instanceV4.post<createListRes>(`/list`, {
            name: listData.name,
            description: listData.description,
            public: listData.isPublic,
            iso_639_1: listData.iso_639_1 || 'en',
            iso_3166_1: listData.iso_3166_1
        })
        return data

    },
    editList: async (listData: editListData, id: number): Promise<createListRes> => {
        const {data} = await instanceV4.put<createListRes>(`/list/${id}`, {
            name: listData.name,
            description: listData.description,
            public: listData.isPublic
        })
        return data

    },
    deleteList: async (id: number): Promise<deleteListRes> => {
        const {data} = await instanceV4.delete<deleteListRes>(`/list/${id}`)
        return data

    },
    addListItem: async (itemId: number, listId: number, sessionId: string): Promise<addListItemRes> => {
        try {
            const {data} = await instance.post<addListItemRes>(`/list/${listId}/add_item?session_id=${sessionId}`,
                {media_id: itemId})
            return data
        } catch (e: any) {
            return e.response.data
        }
    },
    deleteListItem: async (itemId: number, listId: number, sessionId: string): Promise<deleteListItem> => {
        try {
            const {data} = await instance.post<deleteListItem>(`/list/${listId}/remove_item?session_id=${sessionId}`,
                {media_id: itemId})
            return data
        } catch (e: any) {
            return e.response.data
        }
    },
    addComment: async (listId:number, mediaType:mediaType, mediaId:number, comment:string): Promise<addListItemRes> => {
        // @ts-ignore
        const {data} = await instanceV4.put<addListItemRes>(`/list/${listId}/items`, {
            items: [
                {
                    media_type: mediaType,
                    media_id: mediaId,
                    comment: comment
                }
            ]
        })
        return data
    }
}


