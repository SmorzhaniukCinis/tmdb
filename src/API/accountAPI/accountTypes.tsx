export type DetailsType = {
    "avatar": {
        "gravatar": {
            "hash": string
        },
        tmdb: {
            avatar_path: string
        }
    },
    "id": number | null,
    "iso_639_1": string | null
    "iso_3166_1": string | null
    "name": string | null
    "include_adult": boolean | null
    "username": string | null
}

export type CommonResType<T> = {
    "page": number
    "results": Array<T>
    "total_pages": number
    "total_results": number
}
export type createdList = {
    "description": string
    "favorite_count": number
    "id": number
    "item_count": number
    "iso_639_1": string
    "list_type": string
    "name": string
    "poster_path": null | string
}
export type FavoriteMovie = {
    "adult": boolean,
    "backdrop_path": null | string,
    "genre_ids": number[]
    "id": number
    "original_language": string
    "original_title": string
    "overview": string
    "release_date": string
    "poster_path": null | string,
    "popularity": number
    "title": string
    "video": boolean
    "vote_average": number
    "vote_count": number
    "rating"?: number
}
export type ratedMovies = {
    "adult": boolean,
    "backdrop_path": string,
    "genre_ids": [
        number

    ],
    "id": number,
    "original_language": string
    "original_title": string,
    "overview": string
    "release_date": string,
    "poster_path": null | string,
    "popularity": number
    "title": string
    "video": boolean,
    "vote_average": number
    "vote_count": number
    "rating": number
}
export type FavoriteTVShow = {
    "backdrop_path": null | string,
    "first_air_date": string
    "genre_ids": [
        number
    ],
    "id": number
    "original_language": string
    "original_name": string
    "overview": string
    "origin_country": [
        string
    ],
    "poster_path": null | string,
    "popularity": number
    "name": string
    "vote_average": number
    "vote_count": number
    "rating"?: number
}



export type ratedTVShow = {
    "backdrop_path": null | string,
    "first_air_date": string
    "genre_ids": [
        number
    ],
    "id": number,
    "original_language": string
    "original_name": string
    "overview": string
    "origin_country": [
        string
    ],
    "poster_path": null | string,
    "popularity": number
    "name": string
    "vote_average": number
    "vote_count": number
    "rating": number
}
export type ratedTVEpisodes = {
    "air_date": string
    "episode_number": number
    "id": number
    "name": string
    "overview": string
    "production_code": string
    "season_number": number
    "show_id": number
    "still_path": string
    "vote_average": number
    "vote_count": number
    "rating": number
}

export type MovieWatchList = {
    "adult": boolean,
    "backdrop_path": null | string,
    "genre_ids": Array<number>
    "id": number,
    "original_language": string,
    "original_title": string,
    "overview":string
    "release_date": string,
    "poster_path": null | string,
    "popularity":string,
    "title": string,
    "video": boolean,
    "vote_average":number
    "vote_count": number
    rating?: number
}
export type TVShowWatchList = {
    "backdrop_path": null | string,
    "first_air_date": string
    "genre_ids": Array<number>
    "id": number
    "original_language": string
    "original_name": string
    "overview": string
    "origin_country": Array<string>
    "poster_path": null | string,
    "popularity": number
    "name": string
    "vote_average": number
    "vote_count": number
    rating?: number
}
export type markAsFavorite = {
    "status_code": number
    "status_message": string
}
