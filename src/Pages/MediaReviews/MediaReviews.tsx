import React, {useEffect} from 'react';
import {Paper} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovieDetailsSelector} from "../../store/Selectors/movieSelectors";
import {getMovieDetails} from "../../store/movieReducer";
import s from './mediaReviews.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import moment from "moment";
import {SmallMediaReview} from "./Components/SmallMediaReview";
import MediaTitle from "../../Common/Components/MediaTitle/MediaTitle";

export const MediaReviews = () => {

    const dispatch = useDispatch()
    const {media, mediaId} = useParams()
    const movieDetails = useSelector(getMovieDetailsSelector)


    useEffect(() => {
        if(mediaId)
        dispatch(getMovieDetails(Number(mediaId)))
    }, [dispatch, mediaId])

    return (
        <Paper elevation={5}>
            <MediaTitle mediaType={media} title={movieDetails.title} mediaId={mediaId} date={movieDetails.release_date}/>
            <div className={s.reviewList}>
                {movieDetails.reviews?.results?.map(review => <SmallMediaReview key={review.id} review={review}/>)}
            </div>
        </Paper>
    );
};

