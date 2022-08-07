import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTVSeason} from "../../store/Selectors/tvSelectors";
import {GetSeason} from "../../store/TVReducer";
import {useParams} from "react-router-dom";

export const SeasonDetails = () => {

    const seasonDetails = useSelector(getTVSeason)
    const dispatch = useDispatch()
    const {mediaId, seasonNumber} = useParams()


    useEffect(() => {
            dispatch(GetSeason(Number(mediaId), Number(seasonNumber)))
    }, [dispatch, mediaId, seasonNumber])


    return (
        <div>
            {seasonDetails.name}
        </div>
    );
};
