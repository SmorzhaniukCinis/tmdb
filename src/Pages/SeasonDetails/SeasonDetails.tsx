import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTVSeason} from "../../store/Selectors/tvSelectors";
import {GetSeason} from "../../store/TVReducer";
import {useParams} from "react-router-dom";
import MediaTitle from "../../Common/Components/MediaTitle/MediaTitle";
import {Paper} from "@mui/material";
import {EpisodeItem} from "./Components/EpisodeItem";
import {getIsLoading} from "../../store/Selectors/mediaSelectors";
import {Loader} from "../../Common/Components/Loader";
import {episodeActions, getEpisodeStats} from "../../store/episodeReducer";

export const SeasonDetails = React.memo(() => {

        const seasonDetails = useSelector(getTVSeason)
        const isLoading = useSelector(getIsLoading)
        const dispatch = useDispatch()
        const {mediaId, seasonNumber} = useParams()


        useEffect(() => {
            dispatch(GetSeason(Number(mediaId), Number(seasonNumber)))
        }, [dispatch, mediaId, seasonNumber])

        useEffect(() => {
                dispatch(getEpisodeStats(Number(mediaId), Number(seasonNumber), seasonDetails.episodes?.length))

                return function deleteEpisodesRating() {
                    dispatch(episodeActions.deleteEpisodesRating())
                }
            }, [mediaId, seasonDetails.episodes, seasonNumber, dispatch]
        )

        if (isLoading) return <Loader/>
        return (
            <Paper elevation={10}>
                <MediaTitle date={seasonDetails.air_date}
                            mediaId={mediaId}
                            mediaType={'season'}
                            title={seasonDetails.name}/>
                <div>
                    {seasonDetails.episodes && seasonDetails.episodes.map(episode =>
                        <EpisodeItem key={episode.id} episode={episode}/>)}
                </div>
            </Paper>
        )
    }
)