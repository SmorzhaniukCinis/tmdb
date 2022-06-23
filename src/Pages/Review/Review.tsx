import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GetReview} from "../../store/ReviewReducer";
import {Link, useParams} from "react-router-dom";
import {getIsLoading, getReview} from "../../store/Selectors/reviewSelectors";
import {Loader} from "../../Common/Loader";
import {Paper} from "@mui/material";
import s from './Review.module.css'

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
                    {review.media_title}
                </Link>
            </h4>
            {review.content}
        </Paper>
    );
};

