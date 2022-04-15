import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjczOGZkNWQ5YzRjMmNmYWFiZWM4OGMwNDQwMDIyNiIsInN1YiI6IjYyM2VlN2U5ZDEwMGI2MDA1Y2EwZWRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uisv08FEbNTPWi4jcAUVDzxbDK1QX8CSLVMxNR5HFE8'
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