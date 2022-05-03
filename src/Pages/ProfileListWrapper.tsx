import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getFavoriteMovie,
    getFavoriteTVShow,
    getMoviesAndTVShowsWatchList,
    getRatingMoviesAndTVShows
} from "../store/accountReducer";
import {
    getFavoriteMovieSelector,
    getFavoriteTVShowSelector, getIsLoading, getMovieWatchList,
    getRatingMovieSelector, getRatingTVShowSelector, getTVShowWatchList
} from "../store/Selectors/accountSelectors";
import {getIsAuth} from "../store/Selectors/authSelectors";
import {FavoriteCard} from "../components/FavoriteCard";
import {useLocation} from "react-router-dom";
import {Backdrop, Button, CircularProgress, Link, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material'
import {
    CommonResType,
    FavoriteMovie,
    FavoriteTVShow,
    MovieWatchList,
    ratedMovies,
    ratedTVShow, TVShowWatchList
} from "../API/accountAPI/accountTypes";
import style from '../styles/ProfileListWrapper.module.css'


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


    const [typeOfContent, setTypeOfContent] = React.useState<'movie' | 'TV'>('movie');
    const [currentPage, setCurrentPage] = React.useState<'favorite' | 'ratings' | 'watchList'>('favorite');
    const [currentMovie, setCurrentMovie] =
        React.useState<CommonResType<ratedMovies> | CommonResType<MovieWatchList> | CommonResType<FavoriteMovie>>();
    const [currentTVShow, setCurrentTVShow] =
        React.useState<CommonResType<ratedTVShow> | CommonResType<TVShowWatchList> | CommonResType<FavoriteTVShow>>();
    const [title, setTitle] = React.useState<'Favorites' | 'Ratings' | 'Watchlist'>();


    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: 'movie' | 'TV',) => {
        if (newAlignment) {
            setTypeOfContent(newAlignment);
        }
    };


    useEffect(() => {
        if (isAuth) {
            if (location.pathname === '/favorite') {
                setCurrentPage('favorite')
                setTitle('Favorites')
                dispatch(getFavoriteMovie())
                dispatch(getFavoriteTVShow())
            } else if (location.pathname === '/ratings') {
                setCurrentPage('ratings')
                setTitle('Ratings')
                dispatch(getRatingMoviesAndTVShows())
            } else if (location.pathname === '/watchList') {
                setCurrentPage('watchList')
                setTitle('Watchlist')
                dispatch(getMoviesAndTVShowsWatchList())
            }
        }

    }, [dispatch, isAuth, location.pathname])

    useEffect(() => {
        if (currentPage === 'favorite') {
            setCurrentMovie(favoriteMovie)
            setCurrentTVShow(favoriteTVShow)
        } else if (currentPage === 'ratings') {
            setCurrentMovie(ratedMovie)
            setCurrentTVShow(ratedTVShow)
        } else if (currentPage === "watchList") {
            setCurrentMovie(movieWatchList)
            setCurrentTVShow(TVShowWatchList)
        }
    }, [favoriteMovie, favoriteTVShow, ratedMovie, ratedTVShow, movieWatchList, TVShowWatchList, currentPage])

    if (isLoading) {
        return (
            <div>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={true}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </div>

        )

    } else {
        return (
            <div>
                <div className={style.HeadTitle}>
                    <Typography className={style.title} variant={'h5'}>
                        {`My ${title}`}
                    </Typography>
                    <ToggleButtonGroup
                        sx={{marginLeft: '40px'}}
                        color="primary"
                        value={typeOfContent}
                        exclusive
                        onChange={handleChange}
                    >
                        <ToggleButton sx={{width: '100px'}} value="movie">Movie</ToggleButton>
                        <ToggleButton sx={{width: '100px'}} value="TV">TV</ToggleButton>
                    </ToggleButtonGroup>
                    {currentPage === 'ratings' && typeOfContent === 'TV' ?
                        <Button className={style.ratedSeriesButton}>
                            <Link className={style.ratedSeriesLink} href={'/ratedSeries'}>
                                Go to rated series
                            </Link>
                        </Button> : null}
                </div>


                {typeOfContent === 'movie'
                    ? currentMovie?.results.map(movie =>
                        <FavoriteCard key={movie.id} backdropPath={movie.backdrop_path}
                                      language={movie.original_language}
                                      originalTitle={movie.original_title} posterPath={movie.poster_path}
                                      overview={movie.overview} voteAverage={movie.vote_average}
                                      voteCount={movie.vote_count} rating={movie.rating} id={movie.id} type={'movie'}
                                      releaseDate={movie.release_date}/>
                    )
                    : currentTVShow?.results.map(show =>
                        <FavoriteCard key={show.id} backdropPath={show.backdrop_path} language={show.original_language}
                                      originalTitle={show.name} posterPath={show.poster_path}
                                      overview={show.overview} voteAverage={show.vote_average}
                                      voteCount={show.vote_count} rating={show.rating} id={show.id} type={'tv'}
                                      releaseDate={show.first_air_date}/>
                    )
                }

            </div>
        );

    }

};
