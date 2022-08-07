import React, {useEffect, useState} from 'react';
import {Rating, Tooltip} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {episodeActions, getEpisodeStats, rateEpisode} from "../../../store/episodeReducer";
import {getEpisodesRating} from "../../../store/Selectors/episodeSelectors";
import {getTVSeason} from "../../../store/Selectors/tvSelectors";

type props = {
    episodeNumber: number
    episodeId: number
}

export const EpisodeRating: React.FC<props> = ({episodeNumber, episodeId}: props) => {

    const episodesRating = useSelector(getEpisodesRating)
    const {mediaId, seasonNumber} = useParams()
    const dispatch = useDispatch()
    const [currentRating, setCurrentRating] = useState<{ rating: number | false, id: number }>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const seasonDetails = useSelector(getTVSeason)

    // useEffect(() => {
    //         dispatch(getEpisodeStats(Number(mediaId), Number(seasonNumber), episodeNumber))
    //         return function deleteEpisodesRating() {
    //             dispatch(episodeActions.deleteEpisodesRating())
    //         }
    //     }, [mediaId, episodeNumber, seasonNumber, dispatch]
    // )

    useEffect(() => {
        console.log('render')
        if(episodesRating.length === seasonDetails.episodes.length) {
            setCurrentRating(episodesRating.find(item => item.id === episodeId))

        }
        setIsLoading(false)
    }, [episodeId, episodesRating, seasonDetails.episodes.length])

    const setRating = (value: number) => {

    }
    const rateCurrentEpisode = (value: number) => {

        dispatch(
            rateEpisode(Number(mediaId), Number(seasonNumber), episodeNumber, value, currentRating?.id || 0)
        )

    }
    // console.log(isLoading)
    return (
        <div>
            {currentRating?.rating
                ? <div>
                    <Rating
                        precision={0.5}
                        disabled={isLoading}
                        sx={{cursor: 'pointer'}}
                        name="simple-controlled"
                        value={currentRating.rating / 2}
                        onChange={(event, newValue) => {
                            if (newValue) {
                                setIsLoading(true)
                                rateCurrentEpisode(newValue * 2);
                            }
                        }}
                    />
                    <Tooltip sx={{cursor: 'pointer', ml: 2}} title="Delete rating">
                        <DeleteOutlineIcon onClick={() => {
                            // deleteMediaRating()
                            setRating(0)
                        }}/>
                    </Tooltip>
                </div>
                : <Rating
                    precision={0.5}
                    disabled={isLoading}
                    sx={{cursor: 'pointer'}}
                    name="simple-controlled"
                    value={null}
                    onChange={(event, newValue) => {
                        if (newValue) {
                            setRating(newValue * 2)
                            rateCurrentEpisode(newValue * 2);
                        }
                    }}
                />}
        </div>
    );
};

