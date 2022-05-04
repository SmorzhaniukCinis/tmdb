export type movieType = {
    adult: boolean
    backdrop_path: string | null
    genre_ids: Array<number>
    id: number
    media_type: "movie"
    original_language: string
    original_title: string
    overview: string | null
    popularity: 122.474
    poster_path: string | null
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export type TVType = {
    backdrop_path: string | null
    first_air_date: string
    genre_ids: Array<number>
    id: number
    media_type: "tv"
    name: string
    origin_country: Array<string>
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string | null
    vote_average: number
    vote_count: number
}


export type listType = {
    "poster_path": string | null
    "id": number
    "backdrop_path": string | null
    "total_results": number
    "public": boolean
    "revenue": string
    "page": number
    "results": Array<movieType | TVType>
    "object_ids": { [key: string]:string }
    "iso_639_1": string
    "total_pages": number
    "description": string | null
    "created_by": {
        "gravatar_hash": string
        "id": number
        "name": string
        "username": string
    },
    "iso_3166_1": string
    "average_rating": number
    "runtime": number
    "name": string
    "comments": {[key: string]:string}
}