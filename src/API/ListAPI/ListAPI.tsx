import {instanceV4} from "../index";
import {createListData, createListRes, editListData, listType} from "./listTypes";


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

    }

}