import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getPopularMediaSelector, getTopRatedMediaSelector} from "../../store/Selectors/mediaSelectors";
import {getPopularMedia, getTopRatedMedia} from "../../store/mediaReducer";
import {Loader} from "../../Common/Components/Loader";
import {MediaSlider} from "../../Common/Components/MediaSlider/MediaSlider";
import {getNowPlayingMovie, getUpcomingMovies} from "../../store/movieReducer";
import {getNowPlayingMoviesSelector, getUpcomingMoviesSelector} from "../../store/Selectors/movieSelectors";


export const MoviesPage = () => {
    const nowPlayingMovies = useSelector(getNowPlayingMoviesSelector)
    const upcomingMovies = useSelector(getUpcomingMoviesSelector)
    const {popularMovie} = useSelector(getPopularMediaSelector)
    const {topRatedMovie} = useSelector(getTopRatedMediaSelector)
    const isLoading = useSelector(getIsLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUpcomingMovies())
        dispatch(getNowPlayingMovie())
        dispatch(getPopularMedia())
        dispatch(getTopRatedMedia())
    }, [dispatch])

    if(isLoading) return <Loader/>
    return (
        <div>
            <MediaSlider title={'Now Playing Movies'} content={nowPlayingMovies} mediaType={"movie"}/>
            <MediaSlider title={'Upcoming Movies'} content={upcomingMovies} mediaType={"movie"}/>
            <MediaSlider title={'Popular Movies'} content={popularMovie} mediaType={"movie"}/>
            <MediaSlider title={'Top Rated Movies'} content={topRatedMovie} mediaType={"movie"}/>
        </div>
    );
};

