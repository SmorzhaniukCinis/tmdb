import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getCredits} from "../../store/mediaReducer";
import {useDispatch} from "react-redux";
import {mediaType} from "../../Common/types";

type params = {
    mediaId: string
    media: mediaType
}

export const MediaCastAndCrew = () => {

    const {mediaId, media} = useParams<params>()
    const dispatch = useDispatch()

    useEffect(() => {
        if(media) {
            dispatch(getCredits(Number(mediaId), media))
        }
    }, [media, mediaId, dispatch])

    return (
        <div>
            test1
        </div>
    );
};

