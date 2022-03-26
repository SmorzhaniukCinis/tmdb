import axios from "axios";

export const key = '06738fd5d9c4c2cfaabec88c04400226'
export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',

})