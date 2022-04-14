export type DetailsType = {
    "avatar": {
        "gravatar": {
            "hash": string
        },
        tmdb?: {
            avatar_path: string
        }
    },
    "id": number,
    "iso_639_1": string
    "iso_3166_1": string
    "name": string
    "include_adult": boolean
    "username": string
}

type test = {
    avatar: {
        gravatar: {
            hash: string;
        }; tmdb:
            {
                avatar_path: string;
            };
    }; id: number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    include_adult: string;
    username: string; }


export type List = {
    "description": string
    "favorite_count": number
    "id": number
    "item_count": number
    "iso_639_1": string
    "list_type": string
    "name": string
    "poster_path": null | string
}

export type CreatedListType = {
    "page": number
    "results": Array<List>
    "total_pages": number
    "total_results": number
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

export type getFavoriteMovie = {
    "page": number
    "results": Array<FavoriteMovie>
    "total_pages": number
    "total_results": number
}