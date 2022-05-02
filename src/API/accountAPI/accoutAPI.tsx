import {instance} from "../index";
import {
    CommonResType,
    createdList,
    DetailsType,
    FavoriteMovie,
    FavoriteTVShow, markAsFavorite, MovieWatchList,
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
    getFavoriteMovie: async (sessionId: string, accountId?: string): Promise<CommonResType<FavoriteMovie>> => {
        const {data} = await instance
            .get<CommonResType<FavoriteMovie>>(`account/${accountId}/favorite/movies?session_id=${sessionId}`)
        return data
    },
    getFavoriteTVShow: async (sessionId: string, accountId?: string): Promise<CommonResType<FavoriteTVShow>> => {
        const {data} = await instance
            .get<CommonResType<FavoriteTVShow>>(`account/${accountId}/favorite/tv?session_id=${sessionId}`)
        return data
    },
    getRatedMovies: async (sessionId: string, accountId?: string): Promise<CommonResType<ratedMovies>> => {
        const {data} = await instance
            .get<CommonResType<ratedMovies>>(`account/${accountId}/rated/movies?session_id=${sessionId}`)
        return data
    },
    getRatedTVShow: async (sessionId: string, accountId?: string): Promise<CommonResType<ratedTVShow>> => {
        const {data} = await instance
            .get<CommonResType<ratedTVShow>>(`account/${accountId}/rated/tv?session_id=${sessionId}`)
        return data
    },
    getRatedTVEpisodes: async (sessionId: string, accountId?: string): Promise<CommonResType<ratedTVEpisodes>> => {
        const {data} = await instance
            .get<CommonResType<ratedTVEpisodes>>(`account/${accountId}/rated/tv/episodes?session_id=${sessionId}`)
        return data
    },
    getMovieWatchList: async (sessionId: string, accountId?: string): Promise<CommonResType<MovieWatchList>> => {
        const {data} = await instance
            .get<CommonResType<MovieWatchList>>(`account/${accountId}/watchlist/movies?session_id=${sessionId}`)
        return data
    },
    getTVShowWatchList: async (sessionId: string, accountId?: string): Promise<CommonResType<TVShowWatchList>> => {
        const {data} = await instance
            .get<CommonResType<TVShowWatchList>>(`account/${accountId}/watchlist/tv?session_id=${sessionId}`)
        return data
    },
    markAsFavorite: async (sessionId: string, accountId?: string): Promise<markAsFavorite> => {
        const {data} = await instance
            .post<markAsFavorite>(`account/{account_id}/favorite?session_id=${sessionId}`, {
                media_type: '',
                media_id: 0,
                favorite: false
            })
        return data
    },
    addToWatchList: async (sessionId: string, accountId?: string): Promise<markAsFavorite> => {
        const {data} = await instance
            .post<markAsFavorite>(`account/{account_id}/watchlist?session_id=${sessionId}`, {
                media_type: '',
                media_id: 0,
                favorite: false
            })
        return data
    },

}