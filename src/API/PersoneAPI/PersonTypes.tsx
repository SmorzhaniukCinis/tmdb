import {mediaType} from "../../Common/types";
import {MovieType, TVType} from "../SearchAPI/searchTypes";

export type personDetails = {
    "birthday": string | null
    "known_for_department": string
    "deathday": null | string
    "id": number
    "name": string
    "also_known_as": string[]
    "gender": gender
    "biography": string
    "popularity": number
    "place_of_birth": string | null
    "profile_path": string | null
    "adult": boolean
    "imdb_id": string
    "homepage": null | string
    combined_credits: {
        cast: Array<cast>
        crew: Array<crew>
    }
    images: {
        "profiles": images[]
    }
}

export type images = {
    "aspect_ratio": number
    "file_path": string
    "height": number
    "iso_639_1": null,
    "vote_average": number
    "vote_count": number
    "width": number
}

export type gender = 0 | 1 | 2 | 3

export type crew = {
    "id": number
    "department": string
    "original_language": string
    "original_title": string
    "job": string
    "overview": string
    "genre_ids": number[]
    "video": boolean
    "media_type": mediaType
    "credit_id": string,
    "poster_path": string | null
    "popularity": number
    "backdrop_path": string | null
    "vote_count": number
    "title": string
    "adult": boolean
    "vote_average": number
    "release_date": string
    "first_air_date"?: string
    "name"?: string
}

export type cast = {
    "id": number
    "original_language": string
    "episode_count": number
    "overview": string
    "origin_country": string[]
    "original_name": string
    "genre_ids": number[]
    "name"?: string
    "media_type": mediaType,
    "poster_path": string | null
    "first_air_date"?: string
    "vote_average": number
    "vote_count": number
    "character": string
    "backdrop_path": string | null
    "popularity": number
    "credit_id": string
    "title"?: string
    "release_date"?: string
}