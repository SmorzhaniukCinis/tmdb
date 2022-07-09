import React from 'react';
import {deleteMovieRating, rateMovie} from "../store/movieReducer";
import {useDispatch, useSelector} from "react-redux";
import s from '../styles/mediaPage.module.css'
import {getMovieDetailsSelector} from "../store/Selectors/movieSelectors";
import {getImage} from "../Common/getImage";
import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {MediaTools} from "./MediaTools";
import {getTVDetails} from "../store/Selectors/tvSelectors";
import {mediaType} from "../Common/types";
import {getCommonMedia} from "../Common/getCommonMedia";
import MediaMainInfo from "./MediaMainInfo";
import {deleteTVRating, RateTV} from "../store/TVReducer";

type props = {
    mediaType: mediaType
}

export const MediaInfoBlock: React.FC<props> = ({mediaType}: props) => {

    const movieDetails = useSelector(getMovieDetailsSelector)
    const TVDetails = useSelector(getTVDetails)
    const params = useParams()
    const dispatch = useDispatch()

    const currentMedia = getCommonMedia(movieDetails, TVDetails, mediaType)

    const rateMedia = (value: number) => {
        if (params.media === 'movie') {
            dispatch(rateMovie(Number(params.mediaId), value))
        } else if (params.media === 'tv'){
            dispatch(RateTV(Number(params.mediaId), value))
        }
    }

    const deleteMediaRating = () => {
        if (params.media === 'movie') {
            dispatch(deleteMovieRating(Number(params.mediaId)))
        } else {
            dispatch(deleteTVRating(Number(params.mediaId)))
        }
    }


    return (
        <div className={s.CommonInfoBloc}>
            <img className={s.backdropImage} src={getImage("original", currentMedia.backdrop_path)} alt=''/>
            <div style={{position: 'relative', zIndex: 2}}>
                <div className={s.InfoWrapper}>
                    <div>
                        <img className={s.posterImage}
                             src={getImage("original", currentMedia.poster_path)} alt=''/>
                    </div>
                    <div>
                        <MediaMainInfo currentMedia={currentMedia}/>
                        <MediaTools voteCount={currentMedia.vote_count}
                                    voteAverage={currentMedia.vote_average}
                                    deleteMediaRating={deleteMediaRating}
                                    mediaType={mediaType}
                                    mediaId={currentMedia.id}
                                    rateMedia={rateMedia}/>
                        <div>
                            <Typography variant={'h5'}>
                                Overview
                            </Typography>
                            <Typography>
                                {currentMedia.overview}
                            </Typography>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );


};


