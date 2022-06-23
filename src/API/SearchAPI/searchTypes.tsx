import {CommonResType} from "../accountAPI/accountTypes";

export type MovieType = {
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: string
    original_title: string
    genre_ids: Array<number>
    id: number
    original_language: string
    title: string
    backdrop_path: string | null
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}
export type TVType = {
    first_air_date: string
    origin_country: Array<string>
    name: string
    original_name: string
    poster_path: string | null
    adult: boolean
    overview: string
    genre_ids: Array<number>
    id: number
    media_type: 'movie' | 'tv'
    original_language: string
    backdrop_path: string | null
    popularity: number
    vote_count: number
    vote_average: number
}
export type person = {
    "profile_path": string | null
    "adult": boolean,
    "id": number
    "name": string
    "popularity": number
    "known_for": Array<MovieType & TVType>
}
export type searchRes = CommonResType<TVType & MovieType & person>
