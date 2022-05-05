import axios from "axios";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzY29wZXMiOlsiYXBpX3JlYWQiLCJhcGlfd3JpdGUiXSwidmVyc2lvbiI6MSwic3ViIjoiNjIzZWU3ZTlkMTAwYjYwMDVjYTBlZGE5IiwibmJmIjoxNjUxNzY3NDczLCJhdWQiOiIwNjczOGZkNWQ5YzRjMmNmYWFiZWM4OGMwNDQwMDIyNiIsImp0aSI6IjQzNDcxMjcifQ.n1iBFK9ZZ_1d8ogrVCwT-CPAqkaBnOS7_ewXuE_psZA'
export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8'
    }

})
export const instanceForPicture = axios.create({
    baseURL: 'https://image.tmdb.org/t/p/'
})
export const instanceV4 = axios.create({
    baseURL: 'https://api.themoviedb.org/4/',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8'
    }
})