import React from 'react';
import {useSelector} from "react-redux";
import s from '../mediaPage.module.css'
import {getMovieDetailsSelector} from "../../../store/Selectors/movieSelectors";
import {getImage} from "../../../Common/functions/getImage";
import {MediaTools} from "./MediaTools";
import {getTVDetails} from "../../../store/Selectors/tvSelectors";
import {mediaType} from "../../../Common/types";
import {getCommonMedia} from "../../../Common/functions/getCommonMedia";
import MediaMainInfo from "./MediaMainInfo";
import MediaOverview from "./MediaOverview";

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
                        <MediaOverview overview={currentMedia.overview}/>
                    </div>
                </div>
            </div>
        </div>
    );


};


