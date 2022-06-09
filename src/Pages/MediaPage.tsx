import React, {useEffect, useState} from 'react';
import {deleteMovieRating, getMovieDetails, rateMovie} from "../store/movieReducer";
import {useDispatch, useSelector} from "react-redux";
import s from '../styles/mediaPage.module.css'
import {getIsLoading, getMovieDetailsSelector} from "../store/Selectors/movieSelectors";
import {getImage} from "../Common/getImage";
import {CircularProgress, Container, Typography} from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import {useParams} from "react-router-dom";
import {MediaTools} from "../components/MediaTools";
import {MediaInfoBlock} from "../components/MediaInfoBlock";
import {MediaCredits} from "../components/MediaCredits";
import {MediaSocial} from "../components/MediaSocial";
import {Recommendations} from "../components/Recommendations";


export const MediaPage = () => {

    const dispatch = useDispatch()

    const isLoading = useSelector(getIsLoading)
    const params = useParams()
    const [currentMedia, setCurrentMedia] = useState<'movie'| 'tv'>('movie')


    useEffect(() => {

        if (params.media === 'movie') {
            setCurrentMedia(params.media)
            dispatch(getMovieDetails(Number(params.mediaId)))
        } else {
            //get TV
        }

    }, [dispatch, params.media, params.mediaId])



    if (isLoading) {
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

