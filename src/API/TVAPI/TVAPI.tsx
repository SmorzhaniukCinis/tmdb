import {instance} from "../index";


export const tvAPI = {
    getTVDetails: async (TV_Id: number): Promise<{ }> => {
        const {data} = await instance.get<{}>(`/tv/${TV_Id}?append_to_response=`)
        return data
    }
}