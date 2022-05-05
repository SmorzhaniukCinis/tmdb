export type movieAndTVType = {
    adult?: boolean
    media_type: "movie" | 'tv'
    original_title: string
    release_date?: string
    title?: string
    video?: boolean
    backdrop_path: string | null
    first_air_date?: string
    genre_ids: Array<number>
    id: number
    name?: string
    origin_country?: Array<string>
    original_language: string
    original_name?: string
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
    "results": Array<movieAndTVType>
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

export type createListRes = {
    "status_message": string
    "id": number
    "success": boolean
    "status_code": number
}
export type createListData = {
    name: string,
    description?: string,
    isPublic?: boolean,
    iso_639_1?: string,
    iso_3166_1?: string
}
export type editListData = {
    name?: string,
    description?: string,
    isPublic?: boolean,
    sort_by?: string
}