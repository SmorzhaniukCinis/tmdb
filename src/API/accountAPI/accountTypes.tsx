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
    "genre_ids": [
        number
    ],
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
}
export type TVShowWatchList = {
    "backdrop_path": null,
    "first_air_date": "2013-09-26",
    "genre_ids": [
        35
    ],
    "id": 58932,
    "original_language": "en",
    "original_name": "The Crazy Ones",
    "overview": "The Crazy Ones is an American situation comedy series created by David E. Kelley that stars Robin Williams and Sarah Michelle Gellar. The single-camera project premiered on CBS on September 26, 2013, as part of the 2013–14 American television season as a Thursday night 9 pm entry. Bill D'Elia, Dean Lorey, Jason Winer, John Montgomery and Mark Teitelbaum serve as executive producers for 20th Century Fox Television.",
    "origin_country": [
        "US"
    ],
    "poster_path": null,
    "popularity": 0.075407,
    "name": "The Crazy Ones",
    "vote_average": 5.3,
    "vote_count": 4
}
export type markAsFavorite = {
    "status_code": number
    "status_message": string
}
