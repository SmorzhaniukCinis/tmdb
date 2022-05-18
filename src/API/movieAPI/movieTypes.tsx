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
}