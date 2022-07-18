import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getCredits} from "../../store/mediaReducer";
import {useDispatch, useSelector} from "react-redux";
import {mediaType} from "../../Common/types";
import {getCreditsSelector, getIsLoading} from "../../store/Selectors/mediaSelectors";
import {Loader} from "../../Common/Components/Loader";
import {MediaCrew} from "./Components/MediaCrew";
import {MediaCast} from "./Components/MediaCast";
import {Box} from "@mui/material";

type params = {
    mediaId: string
    media: mediaType
}

export const MediaCredits = () => {

    const {mediaId, media} = useParams<params>()
    const dispatch = useDispatch()
    const credits = useSelector(getCreditsSelector)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        if(media) {
            dispatch(getCredits(Number(mediaId), media))
        }
    }, [media, mediaId, dispatch])

    if(isLoading) {
        return <Loader/>
    }
    return (
        <Box sx={{display: 'flex'}}>
            <MediaCast cast={credits.cast}/>
            <MediaCrew crew={credits.crew}/>
        </Box>
    );
};

