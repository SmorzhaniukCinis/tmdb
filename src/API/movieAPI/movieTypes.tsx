import {CommonResType} from "../accountAPI/accountTypes";

export type movieDetailsType = {
    "adult": boolean,
    "backdrop_path": string | null
    "belongs_to_collection": null | object
    "budget": number
    "genres": Array<{id: number, name: string}>
    "homepage": string | null
    "id": number
    "imdb_id": string | null
    "original_language": string
    "original_title": string
    "overview": string | null
    "popularity": number
    "poster_path": null | string,
    "production_companies": Array< {
        "id": number
        "logo_path": string | null
        "name": string
        "origin_country":string
    }>
    "production_countries": Array<{
            "iso_3166_1": string
            "name": string
        }>
    "release_date": string
    "revenue": number
    "runtime": null | number
    "spoken_languages": Array<{
            "iso_639_1": string
            "name": string
        }>
    "status": 'Rumored' | 'Planned' | 'In Production' |  'Post Production' | 'Released' | 'Canceled'
    "tagline": string | null
    "title": string
    "video": boolean
    "vote_average": number
    "vote_count": number
    videos?: {
        results: Array<videoType>
    }
    images: {
        backdrops: Array<imageType>
        logos: Array<imageType>
        posters: Array<imageType>
    }
    reviews: CommonResType<reviewType>
    recommendations: CommonResType<recommendationType>
    credits: commonMediaCredits
    similar: CommonResType<similarMovieType>
}



export type commonMediaCredits = {
    cast: Array<commonCastType>
    crew: Array<commonCrewType>
    id?: number
}

type similarMovieType = {
    adult: boolean
    backdrop_path: string | null
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string | null
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type commonCrewType = {
    adult: boolean
    credit_id: string
    department: string
    gender: number | null
    id: number
    job: string
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string | null
}
export type commonCastType = {
    adult: boolean
    cast_id: number
    character: string
    credit_id: string
    gender: number | null
    id: number
    known_for_department: string
    name: string
    order: number
    original_name: string
    popularity: number
    profile_path: string | null
}

export type recommendationType = {
    name: null
    adult: boolean
    backdrop_path: string | null
    genre_ids: Array<number>
    id: number
    media_type: "movie" | 'tv'
    original_language: string
    original_title: string
    overview: string | null
    popularity: number
    poster_path: string | null
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type reviewType = {
    author: string
    author_details: {
        avatar_path: string | null
        name: string
        rating: null | number
        username: string
    }
    content: string
    created_at: string
    id: string
    updated_at: string
    url: string
}

export type imageType = {
    aspect_ratio: number
    file_path: string
    height: number
    iso_639_1: null | string
    vote_average: number
    vote_count: number
    width: number
}
export type videoType = {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}
export type accountStats = {
    "id": number,
    "favorite": boolean,
    "rated": {"value": number } | false
    "watchlist": boolean
}
export type rateMovieRes = {
    status_code: number
    status_message: string
    success: boolean
}


export type popularMovie = {
    "poster_path": string
    "adult": false,
    "overview": string
    "release_date": string
    "genre_ids": number[]
    "id": number
    "original_title": string
    "original_language": string
    "title": string
    "backdrop_path": string
    "popularity": number
    "vote_count": number
    "video": false,
    "vote_average": number
}