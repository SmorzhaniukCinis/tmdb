import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GetSeason} from "../../store/TVReducer";
import {useParams} from "react-router-dom";
import {getTVSeason} from "../../store/Selectors/tvSelectors";

export const SeasonsPage = () => {

    const dispatch = useDispatch()
    const {mediaId} = useParams()
    const season = useSelector(getTVSeason)

    useEffect(() => {
        dispatch(GetSeason(Number(mediaId), 1))
    },[dispatch, mediaId])

    return (
        <div>
            {season.name}
        </div>
    );
};

