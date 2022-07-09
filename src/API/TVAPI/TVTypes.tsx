import {castItemType, crewItemType} from "../movieAPI/movieTypes";

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
    aggregate_credits: {
        cast: Array<castItemType>
        crew: Array<crewItemType>
    }
    content_ratings: {
        result: Array<{
            iso_3166_1: string
            rating: string
        }>
    }
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
export type TVStats = {
    "id": number,
    "favorite": boolean,
    "rated": {"value": number } | false
    "watchlist": boolean
}