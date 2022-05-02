import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFavoriteMovie, getFavoriteTVShow, getRatingMoviesAndTVShows} from "../store/accountReducer";
import {
    getFavoriteMovieSelector,
    getFavoriteTVShowSelector,
    getRatingMovieSelector, getRatingTVShowSelector
} from "../store/Selectors/accountSelectors";
import {getIsAuth} from "../store/Selectors/authSelectors";
import {ToggleButton, ToggleButtonGroup} from "@mui/lab";
import {FavoriteCard} from "../components/FavoriteCard";
import {useLocation} from "react-router-dom";
import {CommonResType, FavoriteMovie, FavoriteTVShow, ratedMovies, ratedTVShow} from "../API/accountAPI/accountTypes";


export const ProfileListWrapper = () => {

    const dispatch = useDispatch()
    const favoriteMovie = useSelector(getFavoriteMovieSelector)
    const favoriteTVShow = useSelector(getFavoriteTVShowSelector)
    const ratedMovie = useSelector(getRatingMovieSelector)
    const ratedTVShow = useSelector(getRatingTVShowSelector)
    const isAuth = useSelector(getIsAuth)
    const location = useLocation()


    const [typeOfContent, setTypeOfContent] = React.useState('movie');
    const [currentPage, setCurrentPage] = React.useState<'favorite' | 'ratings'>('favorite');
    const [currentMovie, setCurrentMovie] = React.useState<CommonResType<ratedMovies> | CommonResType<FavoriteMovie>>();
    const [currentTVShow, setCurrentTVShow] = React.useState<CommonResType<ratedTVShow> | CommonResType<FavoriteTVShow>>();


    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => {
        setTypeOfContent(newAlignment);
    };



    useEffect(() => {
        debugger
        if (isAuth) {
            if (location.pathname === '/favorite') {
                setCurrentPage('favorite')
                dispatch(getFavoriteMovie())
                dispatch(getFavoriteTVShow())
            } else if (location.pathname === '/ratings') {
                setCurrentPage('ratings')
                dispatch(getRatingMoviesAndTVShows())
            }
        }

    }, [dispatch, isAuth, location.pathname])

    useEffect(() => {
        debugger
        if (currentPage === 'favorite') {
            setCurrentMovie(favoriteMovie)
            setCurrentTVShow(favoriteTVShow)
        } else if(currentPage === 'ratings') {
            setCurrentMovie(ratedMovie)
            setCurrentTVShow(ratedTVShow)
        }
    }, [favoriteMovie, favoriteTVShow, ratedMovie, ratedTVShow])


    return (
        <div>
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

            { typeOfContent === 'movie'
                    ? currentMovie?.results.map(movie =>
                        <FavoriteCard id={movie.id} backdropPath={movie.backdrop_path}
                                      language={movie.original_language}
                                      originalTitle={movie.original_title} posterPath={movie.poster_path}
                                      overview={movie.overview} voteAverage={movie.vote_average}
                                      voteCount={movie.vote_count} releaseDate={movie.release_date}/>
                    )
                    : currentTVShow?.results.map(show =>
                        <FavoriteCard id={show.id} backdropPath={show.backdrop_path} language={show.original_language}
                                      originalTitle={show.name} posterPath={show.poster_path}
                                      overview={show.overview} voteAverage={show.vote_average}
                                      voteCount={show.vote_count} releaseDate={show.first_air_date}/>
                    )
            }

        </div>
    );
};
