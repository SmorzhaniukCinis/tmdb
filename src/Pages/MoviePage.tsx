import React, {useEffect} from 'react';
import {getMovieDetails} from "../store/movieReducer";
import {useDispatch} from "react-redux";

export const MoviePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieDetails(550))
    }, [])

    return (
        <div>
            movie page
        </div>
    );
};

