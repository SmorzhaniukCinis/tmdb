import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getMediaCredits, getMediaDetails} from "../../store/mediaReducer";
import {useDispatch, useSelector} from "react-redux";
import {mediaType} from "../../Common/types";
import {getMediaCreditsSelector, getIsLoading, getMediaDetailsSelector} from "../../store/Selectors/mediaSelectors";
import {Loader} from "../../Common/Components/Loader";
import {MediaCrew} from "./Components/MediaCrew";
import {MediaCast} from "./Components/MediaCast";
import {Box, Paper} from "@mui/material";
import MediaTitle from "../../Common/Components/MediaTitle/MediaTitle";

type params = {
    mediaId: string
    media: mediaType
}

export const MediaCredits = () => {

    const {mediaId, media} = useParams<params>()
    const dispatch = useDispatch()
    const credits = useSelector(getMediaCreditsSelector)
    const details = useSelector(getMediaDetailsSelector)
    const isLoading = useSelector(getIsLoading)
    const navigate = useNavigate()

    useEffect(() => {
        if(media) {
            dispatch(getMediaCredits(Number(mediaId), media))
            dispatch(getMediaDetails(Number(mediaId), media))
        }
    }, [media, mediaId, dispatch])

    const goToPerson = (id:number) => {
        navigate(`/person/${id}`)
    }

    if(isLoading) {
        return <Loader/>
    }
    return (
        <Paper elevation={10}>
            <MediaTitle title={details.title}
                        date={details.releaseDate}
                        mediaType={details.mediaType}
                        mediaId={String(details.id)}/>
            <Box sx={{display: 'flex', pl:6}}>

                <MediaCast cast={credits.cast} goToPerson={goToPerson}/>
                <MediaCrew crew={credits.crew} goToPerson={goToPerson}/>
            </Box>
        </Paper>
    );
};

