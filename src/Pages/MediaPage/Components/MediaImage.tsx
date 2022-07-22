import React, {useEffect, useState} from 'react';
import {imageType} from "../../../API/movieAPI/movieTypes";
import {mediaType} from "../../../Common/types";
import {useSelector} from "react-redux";
import {getMovieDetailsSelector} from "../../../store/Selectors/movieSelectors";
import {getTVDetails} from "../../../store/Selectors/tvSelectors";
import {getImage} from "../../../Common/functions/getImage";
import {Paper} from "@mui/material";
import s from "../mediaPage.module.css";
import {Link} from "react-router-dom";

type props = {
    mediaType: mediaType
}
type images = {
    backdrops: Array<imageType>
    logos: Array<imageType>
    posters: Array<imageType>
}
export const MediaImage = ({mediaType}: props) => {

    const movieDetails = useSelector(getMovieDetailsSelector)
    const tvDetails = useSelector(getTVDetails)
    const [currentMediaImage, setCurrentMediaImage] = useState<images>()

    useEffect(() => {
        if (mediaType === 'movie') {
            setCurrentMediaImage(movieDetails.images)
        } else {
            setCurrentMediaImage(tvDetails.images)
        }
    }, [mediaType, movieDetails.images, tvDetails.images])

    return (
        <Paper elevation={10} sx={{mb: 5, pt: 3, pl: 3}}>
                <span className={s.ImageTitle}>
                    Images
                    <Link className={s.castAndCrewLink} to={`/${mediaType}/${0}/people`}>View all images...</Link>
                </span>
            <div className={s.mediaImageSlider}>
                {currentMediaImage &&
                    currentMediaImage.backdrops
                        .slice(0, 10)
                        .map((img, index) =>
                            <img height={'300px'} key={img.file_path} src={getImage('original', img.file_path)} alt="mediaPhoto"/>
                    )}
            </div>
        </Paper>
    )
}
