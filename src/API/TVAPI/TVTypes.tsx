import {CommonResType} from "../accountAPI/accountTypes";
import {reviewType} from "../movieAPI/movieTypes";
import {mediaType} from "../../Common/types";

export type tvDetails = {
    "backdrop_path": string,
    "created_by": Array<{
        "id": number
        "credit_id": string
        "name": string
        "gender": number
        "profile_path": string
    }>
    "episode_run_time": number[]
    "first_air_date": string
    "genres":
        Array<{
            "id": number
            "name": string
        }>
    "homepage": string
    "id": number
    "in_production": boolean
    "languages": string[]
    "last_air_date": string
    "last_episode_to_air": {
        "air_date": string
        "episode_number": number
        "id": number
        "name": string,
        "overview": string
        "production_code": string
        "season_number": number
        "still_path": string
        "vote_average": number
        "vote_count": number
    },
    "name": string
    "next_episode_to_air": null
    "networks": companiesType[]
    "number_of_episodes": number
    "number_of_seasons": number
    "origin_country": string[]
    "original_language": string
    "original_name": string
    "overview": string
    "popularity": number
    "poster_path": string
    "production_companies": companiesType[]
    "production_countries": Array<{
        "iso_3166_1": string
        "name": string
    }>
    "seasons": seasons[]
    "spoken_languages":Array<{
            "english_name": string
            "iso_639_1": string
            "name": string
        }>
    "status": string,
    "tagline": string
    "type": string
    "vote_average": number
    "vote_count": number
    aggregate_credits: aggregate_creditsType
    content_ratings: {
        result: Array<{
            iso_3166_1: string
            rating: string
        }>
    }
    reviews: CommonResType<reviewType>
    recommendations: CommonResType<recommendationTVItem>
}

export type recommendationTVItem = {
    title: null
    adult: boolean
    backdrop_path: string | null
    first_air_date: string
    genre_ids: string[]
    id: number
    media_type: mediaType
    name: string
    original_language: string
    original_name: string
    overview: string | null
    popularity: number
    poster_path: string | null
    vote_average: number
    vote_count: number
    origin_country: string[]
}

export type aggregate_creditsType = {
    cast: Array<castTVItem>
    crew: Array<crewTVItem>
}

export type crewTVItem = {
    adult: boolean
    department: string
    gender: number
    id: number
    jobs: {
        credit_id: string
        episode_count: number
        job: string
    }
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: null | string
    total_episode_count: number
}

export type castTVItem = {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    order: number
    original_name: string
    popularity: number
    profile_path: string | null
    roles: Array<{
        character: string
        credit_id: string
        episode_count: number
    }>
    total_episode_count: number
}

type companiesType = {
    "id": number
    "logo_path": string
    "name": string
    "origin_country": string
}

type seasons = {
    "air_date": string
    "episode_count": number
    "id": number
    "name": string
    "overview": string
    "poster_path": string
    "season_number": number
}

export type rateTVRes = {
    "status_code": number
    "status_message": string
}
export type mediaStatsType = {
    "id": number,
    "favorite": boolean,
    "rated": {"value": number } | false
    "watchlist": boolean
}