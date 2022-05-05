import {instanceV4} from "../index";
import {createListData, createListRes, listType} from "./listTypes";


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
            iso_639_1: listData.iso_639_1,
            iso_3166_1: listData.iso_3166_1
        })
        return data

    }

}