import React, {useEffect} from 'react';
import {getOnAirTV} from "../../store/Selectors/tvSelectors";
import {useDispatch, useSelector} from "react-redux";
import {GetOnTheAirTVShow} from "../../store/TVReducer";
import {MediaSlider} from "../../Common/Components/MediaSlider/MediaSlider";
import {getPopularMedia, getTopRatedMedia} from "../../store/mediaReducer";
import {getIsLoading, getPopularMediaSelector, getTopRatedMediaSelector} from "../../store/Selectors/mediaSelectors";
import {Loader} from "../../Common/Components/Loader";

const TvShowsPage = () => {

    const onAirTVShows = useSelector(getOnAirTV)
    const {popularTV} = useSelector(getPopularMediaSelector)
    const {topRatedTV} = useSelector(getTopRatedMediaSelector)
    const isLoading = useSelector(getIsLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetOnTheAirTVShow())
        dispatch(getPopularMedia())
        dispatch(getTopRatedMedia())
    }, [dispatch])

    if(isLoading) return <Loader/>
    return (
        <div>
            <MediaSlider title={'On The Air TV Shows'} content={onAirTVShows} mediaType={"tv"} linkParams={'onAir'}/>
            <MediaSlider title={'Popular TV Shows'} content={popularTV} mediaType={"tv"} linkParams={'popular'}/>
            <MediaSlider title={'Top Rated TV Shows'} content={topRatedTV} mediaType={"tv"} linkParams={'topRated'}/>
        </div>
    );
};

export default TvShowsPage;