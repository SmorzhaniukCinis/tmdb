import React, {useEffect} from 'react';
import {getMovieDetails} from "../store/movieReducer";
import {useDispatch, useSelector} from "react-redux";
import s from '../styles/moviePage.module.css'
import {getMovieDetailsSelector} from "../store/Selectors/movieSelectors";
import {getImage} from "../Common/getImage";
import {Container, Typography} from "@mui/material";

export const MoviePage = () => {

    const dispatch = useDispatch()
    const movieDetails = useSelector(getMovieDetailsSelector)

    useEffect(() => {
        dispatch(getMovieDetails(550))
    }, [])

    return (
        <Container>
            <div className={s.CommonInfoBloc}>
                <img className={s.backdropImage}  src={getImage("original" , movieDetails.backdrop_path)}/>
                <div style={{position: 'relative', zIndex: 2}}>
                    <Container sx={{mt: 3}} className={s.InfoWrapper}>
                        <div>
                            <img className={s.posterImage}
                                 src={getImage("original" , movieDetails.poster_path)}/>
                        </div>
                        <div>
                            <Typography className={s.title}>
                                {movieDetails.title}
                                <span>{`  (${parseInt(movieDetails.release_date)})`}</span>
                            </Typography>
                            <Typography>
                                <span>
                                     {movieDetails.release_date.replace(/-/g, '/')}
                                </span>
                                <span className={s.language}>
                                    {` (${movieDetails.original_language})`}
                                </span>
                            </Typography>
                        </div>
                    </Container>
                </div>
            </div>
        </Container>
    );
};

