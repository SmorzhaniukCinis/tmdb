import {movieDetailsType} from "../API/movieAPI/movieTypes";
import {tvDetails} from "../API/TVAPI/TVTypes";
import {mediaType} from "./types";

export const getCommonMedia = function(movieDetails:movieDetailsType , TVDetails:tvDetails ,mediaType:mediaType):commonMedia {
    if(mediaType === 'movie') {
        return {
            title: movieDetails.title,
            backdrop_path: movieDetails.backdrop_path,
            poster_path: movieDetails.poster_path,
            release_date: movieDetails.release_date,
            original_language: movieDetails.original_language,
            genres: movieDetails.genres,
            runtime: movieDetails.runtime,
            vote_count: movieDetails.vote_count,
            vote_average: movieDetails.vote_average,
            overview: movieDetails.overview,
            id: movieDetails.id,
        }
    } else {
        return {
            title: TVDetails.name,
            backdrop_path: TVDetails.backdrop_path,
            poster_path: TVDetails.poster_path,
            release_date: TVDetails.first_air_date,
            original_language: TVDetails.original_language,
            genres: TVDetails.genres,
            runtime: null,
            vote_count: TVDetails.vote_count,
            vote_average: TVDetails.vote_average,
            overview: TVDetails.overview,
            id: TVDetails.id,
        }
    }
}

export type commonMedia = {
    title: string,
    backdrop_path: string | null,
    poster_path: string | null,
    release_date: string,
    original_language: string,
    genres: Array<{id: number, name: string}>,
    runtime: number | null,
    vote_count: number,
    vote_average: number,
    overview: string | null,
    id: number
}