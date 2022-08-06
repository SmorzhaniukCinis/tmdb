import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GetSeason, GetTVDetails} from "../../store/TVReducer";
import {useParams} from "react-router-dom";
import {getTVDetails, getTVSeason} from "../../store/Selectors/tvSelectors";

export const SeasonsPage = () => {

    const dispatch = useDispatch()
    const {mediaId} = useParams()
    const seasonsDetails = useSelector(getTVSeason)
    const {seasons, id} = useSelector(getTVDetails)

    useEffect(() => {
        dispatch(GetTVDetails(Number(mediaId)))
    }, [mediaId, dispatch])

    useEffect(() => {
        if (seasons) {
            dispatch(GetSeason(Number(mediaId),  seasons.length))
        }
    }, [dispatch, mediaId, seasons])

    return (
        <div>
            {seasonsDetails[0]?.name}
        </div>
    );
};

