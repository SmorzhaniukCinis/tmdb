import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GetReview} from "../../store/ReviewReducer";
import {Link, useParams} from "react-router-dom";
import {getIsLoading, getReview} from "../../store/Selectors/reviewSelectors";
import {Loader} from "../../Common/Loader";
import {Paper} from "@mui/material";
import s from './Review.module.css'
import moment from "moment";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Review = () => {

    const dispatch = useDispatch()
    const {reviewId} = useParams()
    const review = useSelector(getReview)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
            if (reviewId)
                dispatch(GetReview(reviewId))
        }, [dispatch, reviewId]
    )


    if (isLoading) {
        return <Loader/>
    }
    return (
        <Paper elevation={5} sx={{p: 4}}>
            <h4>
                <Link className={s.linkToMedia} to={`/${review.media_type}/${review.media_id}`}>
                    <ArrowBackIcon fontSize={'small'} sx={{mr:1}}/>
                    {review.media_title}
                </Link>
            </h4>
            <h5 className={s.reviewDetails}>
                <span>{`Written by `}</span>
                <Link to={'/'} className={s.reviewAuthor}>{review.author_details?.name || review.author}</Link>
                <span>{` on `}</span>
                <span className={s.reviewDate}>{moment(review.updated_at || review.created_at).format('MMM Do YY')}</span>
            </h5>
            <p className={s.reviewContent}>
                {review.content}
            </p>
        </Paper>
    );
};

