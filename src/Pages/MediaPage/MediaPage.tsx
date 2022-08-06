import React, {useEffect, useState} from 'react';
import {getMovieDetails} from "../../store/movieReducer";
import {useDispatch, useSelector} from "react-redux";
import s from './mediaPage.module.css'
import {Container} from "@mui/material";
import {useParams} from "react-router-dom";
import {MediaInfoBlock} from "./Components/MediaInfoBlock";
import {MediaCredits} from "./Components/MediaCredits";
import {MediaSocial} from "./Components/MediaSocial";
import {Recommendations} from "./Components/Recommendations";
import {GetTVDetails} from "../../store/TVReducer";
import {Loader} from "../../Common/Components/Loader";
import {getIsLoading} from "../../store/Selectors/mediaSelectors";
import {MediaImage} from "./Components/MediaImage";
import {CurrentTVSeason} from "./Components/CurrentTVSeason";


export const MediaPage = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)
    const params = useParams()
    const [mediaType, setMediaType] = useState<'movie'| 'tv'>('movie')


    useEffect(() => {
        if (params.media === 'movie') {
            setMediaType(params.media)
            dispatch(getMovieDetails(Number(params.mediaId)))
        } else if (params.media === 'tv'){
            setMediaType(params.media)
            dispatch(GetTVDetails(Number(params.mediaId)))
        }

    }, [dispatch, params.media, params.mediaId])



    if (isLoading) {
        return <Loader/>
    } else {
            return (
                <Container maxWidth={'lg'}>
                    <MediaInfoBlock mediaType={mediaType}/>
                    <div className={s.empty}>secret message;)</div>
                    <MediaCredits id={Number(params.mediaId) || 0} mediaType={mediaType}/>
                    {
                        mediaType === 'tv' && <CurrentTVSeason/>
                    }
                    <MediaSocial mediaType={mediaType}/>
                    <MediaImage mediaType={mediaType}/>
                    <Recommendations mediaType={mediaType}/>
                </Container>
            )
    }
};

