import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getCreatedList,
    getFavoriteMovie,
    getFavoriteTVShow,
    getMoviesAndTVShowsWatchList,
    getRatingMoviesAndTVShows
} from "../../store/accountReducer";
import {
    getCreatedLists,
    getFavoriteMovieSelector,
    getFavoriteTVShowSelector,
    getIsLoading,
    getMovieWatchList,
    getRatingMovieSelector,
    getRatingTVShowSelector,
    getTVShowWatchList
} from "../../store/Selectors/accountSelectors";
import {getIsAuth} from "../../store/Selectors/authSelectors";
import {ItemCard} from "./Components/ItemCard";
import {useLocation} from "react-router-dom";
import {Pagination} from '@mui/material'
import {
    CommonResType,
    FavoriteMovie,
    FavoriteTVShow,
    MovieWatchList,
    ratedMovies,
    ratedTVShow,
    TVShowWatchList
} from "../../API/accountAPI/accountTypes";
import {CommonListHead} from "./Components/CommonListHead";
import {mediaType} from "../../Common/types";
import {Loader} from "../../Common/Components/Loader";


export const ProfileListWrapper = () => {

    const dispatch = useDispatch()
    const favoriteMovie = useSelector(getFavoriteMovieSelector)
    const favoriteTVShow = useSelector(getFavoriteTVShowSelector)
    const ratedMovie = useSelector(getRatingMovieSelector)
    const ratedTVShow = useSelector(getRatingTVShowSelector)
    const movieWatchList = useSelector(getMovieWatchList)
    const TVShowWatchList = useSelector(getTVShowWatchList)
    const isAuth = useSelector(getIsAuth)
    const isLoading = useSelector(getIsLoading)
    const location = useLocation()
    const lists = useSelector(getCreatedLists)


    const [typeOfContent, setTypeOfContent] = React.useState<mediaType>('movie');
    const [currentPage, setCurrentPage] = React.useState<'favorite' | 'ratings' | 'watchList'>('favorite');
    const [itemCount, setItemCount] = React.useState<[number, number]>([0, 0]);
    const [currentMovie, setCurrentMovie] =
        React.useState<CommonResType<ratedMovies> | CommonResType<MovieWatchList> | CommonResType<FavoriteMovie>>();
    const [currentTVShow, setCurrentTVShow] =
        React.useState<CommonResType<ratedTVShow> | CommonResType<TVShowWatchList> | CommonResType<FavoriteTVShow>>();
    const [title, setTitle] = React.useState<'Favorites' | 'Ratings' | 'Watchlist'>('Favorites');

    ///////pagination//////
    const [page, setPage] = React.useState(1);
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    ///////////


    useEffect(() => {
        if (isAuth) {
            if (lists.results.length === 0) {
                dispatch(getCreatedList())
            }
            if (location.pathname === '/favorite') {
                setCurrentPage('favorite')
                setTitle('Favorites')
                dispatch(getFavoriteMovie(page))
                dispatch(getFavoriteTVShow(page))
            } else if (location.pathname === '/ratings') {
                setCurrentPage('ratings')
                setTitle('Ratings')
                dispatch(getRatingMoviesAndTVShows(page))
            } else if (location.pathname === '/watchList') {
                setCurrentPage('watchList')
                setTitle('Watchlist')
                dispatch(getMoviesAndTVShowsWatchList(page))
            }
        }

    }, [dispatch, isAuth, location.pathname, page, lists.results.length])

    useEffect(() => {
        if (currentPage === 'favorite') {
            setCurrentMovie(favoriteMovie)
            setCurrentTVShow(favoriteTVShow)
            setItemCount([favoriteMovie.total_results, favoriteTVShow.total_results])
        } else if (currentPage === 'ratings') {
            setCurrentMovie(ratedMovie)
            setCurrentTVShow(ratedTVShow)
            setItemCount([ratedMovie.total_results, ratedTVShow.total_results])
        } else if (currentPage === "watchList") {
            setCurrentMovie(movieWatchList)
            setCurrentTVShow(TVShowWatchList)
            setItemCount([movieWatchList.total_results, TVShowWatchList.total_results])
        }
    }, [favoriteMovie, favoriteTVShow, ratedMovie, ratedTVShow, movieWatchList, TVShowWatchList, currentPage])


    if (isLoading) return <Loader/>

    return (
        <div>

            <CommonListHead currentPage={currentPage} itemCount={itemCount}
                            title={title} setTypeOfContent={setTypeOfContent}
                            typeOfContent={typeOfContent}/>

            {typeOfContent === 'movie'
                ? <div>
                    {currentMovie?.results.map(movie =>
                        <ItemCard key={movie.id} backdropPath={movie.backdrop_path}
                                  language={movie.original_language}
                                  originalTitle={movie.original_title} posterPath={movie.poster_path}
                                  overview={movie.overview} voteAverage={movie.vote_average}
                                  voteCount={movie.vote_count} rating={movie.rating} id={movie.id}
                                  type={'movie'}
                                  releaseDate={movie.release_date}/>
                    )}
                    {
                        (currentMovie?.total_pages && currentMovie?.total_pages > 1)
                            ? <Pagination page={page} onChange={handleChangePage} count={currentMovie?.total_pages}/>
                            : null
                    }
                </div>
                : <div>
                    {currentTVShow?.results.map(show =>
                        <ItemCard key={show.id} backdropPath={show.backdrop_path} language={show.original_language}
                                  originalTitle={show.name} posterPath={show.poster_path}
                                  overview={show.overview} voteAverage={show.vote_average}
                                  voteCount={show.vote_count} rating={show.rating} id={show.id} type={'tv'}
                                  releaseDate={show.first_air_date}/>
                    )}
                    {
                        (currentTVShow?.total_pages && currentTVShow?.total_pages > 1)
                            ? <Pagination page={page} onChange={handleChangePage} count={currentTVShow?.total_pages}/>
                            : null
                    }
                </div>
            }

        </div>
    )
}
