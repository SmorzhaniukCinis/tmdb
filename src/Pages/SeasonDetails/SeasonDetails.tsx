import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTVSeason} from "../../store/Selectors/tvSelectors";
import {GetSeason} from "../../store/TVReducer";
import {useParams} from "react-router-dom";
import MediaTitle from "../../Common/Components/MediaTitle/MediaTitle";
import {Paper} from "@mui/material";
import {EpisodeItem} from "./Components/EpisodeItem";

export const SeasonDetails = () => {

    const seasonDetails = useSelector(getTVSeason)
    const dispatch = useDispatch()
    const {mediaId, seasonNumber} = useParams()


    useEffect(() => {
            dispatch(GetSeason(Number(mediaId), Number(seasonNumber)))
    }, [dispatch, mediaId, seasonNumber])


    return (
        <Paper elevation={10}>
            <MediaTitle date={seasonDetails.air_date} mediaId={mediaId} mediaType={'season'} title={seasonDetails.name}/>
            {seasonDetails.episodes && seasonDetails.episodes.map(episode => <EpisodeItem key={episode.id} episode={episode}/>)}
        </Paper>
    );
};
