import {instance} from "../index";


export const certificationsAPI = {
    getMovieCertifications: async () => {
        const {data} = await instance.get('certification/movie/list')
        return data
    }
}