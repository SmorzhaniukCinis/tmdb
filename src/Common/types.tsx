import {imageType} from "../API/movieAPI/movieTypes";

export type mediaType = 'tv' | 'movie'

export type MinimizedMediaDetails = {
    title: string,
    id: number,
    mediaType: mediaType,
    releaseDate: string
}
export type mediaImagesType = {
    id: number
    backdrops: Array<imageType>
    logos: Array<imageType>
    posters: Array<imageType>
}

export type mediaCardType = {
    id: number
    name: string
    overview: string
    date: string
    posterPath: string
    type: mediaType
    voteAverage: number
    voteCount: number
}