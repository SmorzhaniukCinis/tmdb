import {instance} from "../index";
import {
    CommonResType,
    createdList,
    DetailsType,
    FavoriteMovie,
    FavoriteTVShow, favoriteAndWatchListRes, MovieWatchList,
    ratedMovies,
    ratedTVEpisodes,
    ratedTVShow,
    TVShowWatchList
} from "./accountTypes";


export const accountAPI = {
    getDetails: async (sessionId: string): Promise<DetailsType> => {
        const {data} = await instance.get<DetailsType>(`account?session_id=${sessionId}`)
        return data
    },
    getCreatedList: async (sessionId: string, accountId?: string): Promise<CommonResType<createdList>> => {
        const {data} = await instance
            .get<CommonResType<createdList>>(`account/${accountId}/lists?session_id=${sessionId}`)
        return data
    },
    getFavoriteMovie: async (sessionId: string, page?:number, accountId?: string): Promise<CommonResType<FavoriteMovie>> => {
        const {data} = await instance
            .get<CommonResType<FavoriteMovie>>(`account/${accountId}/favorite/movies?session_id=${sessionId}&page=${page}`)
        return data
    },
    getFavoriteTVShow: async (sessionId: string, page?:number, accountId?: string): Promise<CommonResType<FavoriteTVShow>> => {
        const {data} = await instance
            .get<CommonResType<FavoriteTVShow>>(`account/${accountId}/favorite/tv?session_id=${sessionId}&page=${page}`)
        return data
    },
    getRatedMovies: async (sessionId: string, page?:number, accountId?: string): Promise<CommonResType<ratedMovies>> => {
        const {data} = await instance
            .get<CommonResType<ratedMovies>>(`account/${accountId}/rated/movies?session_id=${sessionId}&page=${page}`)
        return data
    },
    getRatedTVShow: async (sessionId: string, page?:number, accountId?: string): Promise<CommonResType<ratedTVShow>> => {
        const {data} = await instance
            .get<CommonResType<ratedTVShow>>(`account/${accountId}/rated/tv?session_id=${sessionId}&page=${page}`)
        return data
    },
    getRatedTVEpisodes: async (sessionId: string, page?:number, accountId?: string): Promise<CommonResType<ratedTVEpisodes>> => {
        const {data} = await instance
            .get<CommonResType<ratedTVEpisodes>>(`account/${accountId}/rated/tv/episodes?session_id=${sessionId}&page=${page}`)
        return data
    },
    getMovieWatchList: async (sessionId: string, page?:number, accountId?: string): Promise<CommonResType<MovieWatchList>> => {
        const {data} = await instance
            .get<CommonResType<MovieWatchList>>(`account/${accountId}/watchlist/movies?session_id=${sessionId}&page=${page}`)
        return data
    },
    getTVShowWatchList: async (sessionId: string, page?:number, accountId?: string): Promise<CommonResType<TVShowWatchList>> => {
        const {data} = await instance
            .get<CommonResType<TVShowWatchList>>(`account/${accountId}/watchlist/tv?session_id=${sessionId}&page=${page}`)
        return data
    },
    markAsFavorite: async (sessionId: string, isFavorite: boolean, id: number, type: 'movie' | 'tv', accountId?: string)
        : Promise<favoriteAndWatchListRes> => {
        try {
            const {data} = await instance
                .post<favoriteAndWatchListRes>(`account/{account_id}/favorite?session_id=${sessionId}`, {
                    media_type: type,
                    media_id: id,
                    favorite: isFavorite
                })
            return data
        }
        catch (e) {
            return e as favoriteAndWatchListRes
        }

    },
    addToWatchList: async (sessionId: string, isWatchlist: boolean, id: number, type: 'movie' | 'tv', accountId?: string)
        : Promise<favoriteAndWatchListRes> => {
        const {data} = await instance
            .post<favoriteAndWatchListRes>(`account/{account_id}/watchlist?session_id=${sessionId}`, {
                media_type: type,
                media_id: id,
                watchlist: isWatchlist
            })
        return data
    },

}