import React, {useEffect} from 'react';
import {direction} from "../MediaPage/Components/MediaImage";
import ImageDirectionsToggle from "../../Common/Components/ImageDirectionsToggle";
import MediaTitle from "../../Common/Components/mediaTitle/MediaTitle";
import {getMediaDetails, getMediaImages} from "../../store/mediaReducer";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {mediaType} from "../../Common/types";
import {getIsLoading, getMediaDetailsSelector, getMediaImagesSelector} from "../../store/Selectors/mediaSelectors";
import s from './MediaImages.module.css'
import {Paper} from "@mui/material";
import {ImagesList} from "./Components/ImagesList";
import {Loader} from "../../Common/Components/Loader";
import {ImagesListWrapper} from "./Components/ImagesListWrapper";

export const MediaImagePage = () => {

    const [imageDirection, setImageDirection] = React.useState<direction>('backdrops');
    const dispatch = useDispatch()
    const {media, mediaId} = useParams<{ media: mediaType, mediaId: string }>()
    const mediaDetails = useSelector(getMediaDetailsSelector)
    const isLoading = useSelector(getIsLoading)
    const mediaImages = useSelector(getMediaImagesSelector)

    useEffect(() => {
        if (media) {
            dispatch(getMediaDetails(Number(mediaId), media))
            dispatch(getMediaImages(Number(mediaId), media))
        }
    }, [media, mediaId, dispatch])

    if (isLoading) return <Loader/>
    return (
        <Paper elevation={10}>
            <MediaTitle title={mediaDetails.title}
                        date={mediaDetails.releaseDate}
                        mediaType={mediaDetails.mediaType}
                        mediaId={mediaDetails.id}/>
            <div className={s.imageDirection}>
                <ImageDirectionsToggle imageDirection={imageDirection} setImageDirection={setImageDirection}/>
            </div>
            <ImagesListWrapper  imagesList={mediaImages} imageDirection={imageDirection}/>
        </Paper>
    );
};

