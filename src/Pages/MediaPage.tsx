import React, {useEffect, useState} from 'react';
import {getMovieDetails} from "../store/movieReducer";
import {useDispatch, useSelector} from "react-redux";
import s from '../styles/mediaPage.module.css'
import {getIsLoading} from "../store/Selectors/movieSelectors";
import {CircularProgress, Container} from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import {useParams} from "react-router-dom";
import {MediaInfoBlock} from "../components/MediaInfoBlock";
import {MediaCredits} from "../components/MediaCredits";
import {MediaSocial} from "../components/MediaSocial";
import {Recommendations} from "../components/Recommendations";
import {getIsTVLoading} from "../store/Selectors/tvSelectors";
import {GetTVDetails} from "../store/TVReducer";


export const MediaPage = () => {

    const dispatch = useDispatch()

    const isMovieLoading = useSelector(getIsLoading)
    const isTVLoading = useSelector(getIsTVLoading)
    const params = useParams()
    const [currentMedia, setCurrentMedia] = useState<'movie'| 'tv'>('movie')


    useEffect(() => {

        if (params.media === 'movie') {
            setCurrentMedia(params.media)
            dispatch(getMovieDetails(Number(params.mediaId)))
        } else if (params.media === 'tv'){
            setCurrentMedia(params.media)
            dispatch(GetTVDetails(Number(params.mediaId)))
        }

    }, [dispatch, params.media, params.mediaId])



    if (isMovieLoading || isTVLoading) {
        return <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={true}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
    } else {
        return (
            <Container maxWidth={'lg'}>
                <MediaInfoBlock currentMedia={currentMedia}/>
                <div className={s.empty}>secret message;)</div>
                <MediaCredits/>
                <MediaSocial/>
                <Recommendations/>
            </Container>
        );
    }


};

