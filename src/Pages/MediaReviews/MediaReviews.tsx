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
            <div className={s.mediaTitleWrapper}>
                <Link className={s.mediaTitle} to={`/${media}/${mediaId}`}>
                    <ArrowBackIcon fontSize={'small'} sx={{mr:1}}/>
                    <span>{movieDetails.title}</span>
                    <span className={s.mediaDate}>{` (${moment(movieDetails?.release_date).format('YYYY')})`}</span>
                </Link>
            </div>
            <div className={s.reviewList}>
                {movieDetails.reviews.results.map(review => <SmallMediaReview review={review}/>)}
            </div>
        </Paper>
    );
};

