import React from 'react';
import {deleteMovieRating, rateMovie} from "../store/movieReducer";
import {useDispatch, useSelector} from "react-redux";
import s from '../styles/mediaPage.module.css'
import {getMovieDetailsSelector} from "../store/Selectors/movieSelectors";
import {getImage} from "../Common/getImage";
import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {MediaTools} from "./MediaTools";

type props = {
    currentMedia:'tv'|'movie'
}

export const MediaInfoBlock:React.FC<props> = ({currentMedia}:props) => {

    const movieDetails = useSelector(getMovieDetailsSelector)
    const params = useParams()
    const dispatch = useDispatch()

    const rateMedia = (value:number) => {
        if (params.media === 'movie') {
            dispatch(rateMovie(Number(params.mediaId), value))
        } else {
            //get TV
        }
    }
    const deleteMediaRating = () => {
        if (params.media === 'movie') {
            dispatch(deleteMovieRating(Number(params.mediaId)))
        } else {
            //get TV
        }
    }


    return (
                <div className={s.CommonInfoBloc}>
                    <img className={s.backdropImage} src={getImage("original", movieDetails.backdrop_path)} alt=''/>
                    <div style={{position: 'relative', zIndex: 2}}>
                        <div className={s.InfoWrapper}>
                            <div>
                                <img className={s.posterImage}
                                     src={getImage("original", movieDetails.poster_path)} alt=''/>
                            </div>
                            <div>
                                <div>
                                    <Typography sx={{fontSize: 35, fontWeight: 'bold'}}>
                                        {movieDetails.title}
                                        <span
                                            className={s.movieDate}>{`  (${parseInt(movieDetails.release_date)})`}</span>
                                    </Typography>
                                    <Typography>
                                    <span>
                                         {movieDetails.release_date?.replace(/-/g, '/')}
                                    </span>
                                        <span className={s.language}>
                                        {` (${movieDetails.original_language})`}
                                    </span>
                                        {movieDetails.genres
                                            ? movieDetails.genres.map(i =>
                                                <span className={s.genre} key={i.id}>{i.name}</span>)
                                            : null}
                                        <span className={s.runTime}>
                                        {movieDetails.runtime
                                            ? `${Math.floor(movieDetails.runtime / 60)} h. ${movieDetails.runtime % 60} min.`
                                            : null
                                        }
                                    </span>
                                    </Typography>
                                </div>

                                <MediaTools voteCount={movieDetails.vote_count}
                                            voteAverage={movieDetails.vote_average}
                                            deleteMediaRating={deleteMediaRating}
                                            currentMedia={currentMedia}
                                            mediaId={movieDetails.id}
                                            rateMedia={rateMedia}/>

                                <div>
                                    <Typography variant={'h5'}>
                                        Overview
                                    </Typography>
                                    <Typography>
                                        {movieDetails.overview}
                                    </Typography>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        );



};


