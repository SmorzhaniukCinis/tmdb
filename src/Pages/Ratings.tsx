import React, {useEffect} from 'react';
import {ToggleButton, ToggleButtonGroup} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {getRatingMoviesAndTVShows} from "../store/accountReducer";
import {getRatingMovieSelector, getRatingTVShowSelector} from "../store/Selectors/accountSelectors";
import {FavoriteCard} from "../components/FavoriteCard";

export const Ratings = () => {

    const [typeOfContent, setTypeOfContent] = React.useState('movie');

    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => {
        setTypeOfContent(newAlignment);
    };
    const ratedMovies = useSelector(getRatingMovieSelector)
    const ratedTVShows = useSelector(getRatingTVShowSelector)

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getRatingMoviesAndTVShows())
    }, [dispatch])

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

            {typeOfContent === 'movie'
                ? ratedMovies.results.map(movie =>
                    <FavoriteCard id={movie.id} backdropPath={movie.backdrop_path} language={movie.original_language}
                                  originalTitle={movie.original_title} posterPath={movie.poster_path}
                                  overview={movie.overview} voteAverage={movie.vote_average}
                                  voteCount={movie.vote_count} releaseDate={movie.release_date}/>
                )
                : ratedTVShows.results.map(show =>
                    <FavoriteCard id={show.id} backdropPath={show.backdrop_path} language={show.original_language}
                                  originalTitle={show.name} posterPath={show.poster_path}
                                  overview={show.overview} voteAverage={show.vote_average}
                                  voteCount={show.vote_count} releaseDate={show.first_air_date}/>
                )
            }
        </div>

    );
};
