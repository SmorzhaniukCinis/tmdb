import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GetReview} from "../../store/ReviewReducer";
import {useParams} from "react-router-dom";
import {getIsLoading, getReview} from "../../store/Selectors/reviewSelectors";
import {Loader} from "../../Common/Loader";

export const Review = () => {

    const dispatch = useDispatch()
    const {reviewId} = useParams()
    const review = useSelector(getReview)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        if(reviewId)
        dispatch(GetReview(reviewId))
        },[dispatch, reviewId])


    console.log(review)
    if(isLoading) {
        return <Loader/>
    }
    return (
        <div>
            {review.content}
        </div>
    );
};

