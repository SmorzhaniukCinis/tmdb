import {mediaType} from "../../Common/types";

export type reviewType = {
    "id": string
    "author": string
    "author_details": {
        "name": string
        "username": string
        "avatar_path": string
        "rating": number
    },
    "content":string
    "created_at": string
    "iso_639_1": string
    "media_id": number
    "media_title": string
    "media_type": mediaType
    "updated_at": string | null
    "url": string
}