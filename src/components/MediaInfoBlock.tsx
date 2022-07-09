import React from 'react';
import {useSelector} from "react-redux";
import s from '../styles/mediaPage.module.css'
import {getMovieDetailsSelector} from "../store/Selectors/movieSelectors";
import {getImage} from "../Common/getImage";
import {Typography} from "@mui/material";
import {MediaTools} from "./MediaTools";
import {getTVDetails} from "../store/Selectors/tvSelectors";
import {mediaType} from "../Common/types";
import {getCommonMedia} from "../Common/getCommonMedia";
import MediaMainInfo from "./MediaMainInfo";

type props = {
    mediaType: mediaType
}

export const MediaInfoBlock: React.FC<props> = ({mediaType}: props) => {

    const movieDetails = useSelector(getMovieDetailsSelector)
    const TVDetails = useSelector(getTVDetails)

    const currentMedia = getCommonMedia(movieDetails, TVDetails, mediaType)

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
                                    mediaType={mediaType}
                                    mediaId={currentMedia.id}/>
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


