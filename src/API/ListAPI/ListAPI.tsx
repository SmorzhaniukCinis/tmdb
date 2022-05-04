import {instanceV4} from "../index";
import {listType} from "./listTypes";


export const listAPI = {
    getList : async (listId: number):Promise<listType> => {
        const {data} = await instanceV4.get<listType>(`/list/${listId}`)
        return data

    }

}