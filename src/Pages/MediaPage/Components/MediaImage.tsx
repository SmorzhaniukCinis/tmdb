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
import {ToggleButton, ToggleButtonGroup} from "@mui/lab";
import ImageDirectionsToggle from "../../../Common/Components/ImageDirectionsToggle";
import MediaImageSlider from "./MediaImageSlider";

type props = {
    mediaType: mediaType
}
export type images = {
    backdrops: Array<imageType>
    logos: Array<imageType>
    posters: Array<imageType>
}

export type direction = "backdrops" | "logos" | "posters"

export const MediaImage = ({mediaType}: props) => {

    const movieDetails = useSelector(getMovieDetailsSelector)
    const tvDetails = useSelector(getTVDetails)
    const [currentMediaImage, setCurrentMediaImage] = useState<images>()
    const [imageDirection, setImageDirection] = React.useState<direction>('backdrops');

    useEffect(() => {
        if (mediaType === 'movie') {
            setCurrentMediaImage(movieDetails.images)
        } else {
            setCurrentMediaImage(tvDetails.images)
        }
    }, [mediaType, movieDetails.images, tvDetails.images])



    return (
        <Paper elevation={10} sx={{mb: 5, padding: '22px 22px 0 22px'}}>
                <span className={s.ImageTitle}>
                    Images
                    <Link className={s.castAndCrewLink} to={`/${mediaType}/${0}/people`}>View all images...</Link>
                </span>
            <ImageDirectionsToggle imageDirection={imageDirection} setImageDirection={setImageDirection}/>
            <MediaImageSlider currentMediaImage={currentMediaImage} direction={imageDirection}/>

        </Paper>
    )
}
