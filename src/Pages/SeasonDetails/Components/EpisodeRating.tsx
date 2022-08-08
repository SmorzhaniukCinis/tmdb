import React, {useEffect, useState} from 'react';
import {Rating, Skeleton, Tooltip} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {DeleteEpisodeRating, rateEpisode} from "../../../store/episodeReducer";
import {getEpisodesRating, getIsRatingFetching} from "../../../store/Selectors/episodeSelectors";
import {getTVSeason} from "../../../store/Selectors/tvSelectors";

type props = {
    episodeNumber: number
    episodeId: number
}

export const EpisodeRating: React.FC<props> = ({episodeNumber, episodeId}: props) => {

    const episodesRating = useSelector(getEpisodesRating)
    const isRatingFetching = useSelector(getIsRatingFetching)
    const {mediaId, seasonNumber} = useParams()
    const dispatch = useDispatch()
    const [currentRating, setCurrentRating] = useState<{ rating: number | false, id: number }>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const seasonDetails = useSelector(getTVSeason)

    useEffect(() => {
        if (episodesRating.length === seasonDetails.episodes.length) {
            setCurrentRating(episodesRating.find(item => item.id === episodeId))
            setIsLoading(false)
        }
    }, [episodeId, episodesRating, episodesRating.length])

    const DeleteRating = () => {
        setIsLoading(true)
        dispatch(DeleteEpisodeRating(Number(mediaId), Number(seasonNumber), episodeNumber, currentRating?.id))
    }
    const rateCurrentEpisode = (value: number) => {
        dispatch(
            rateEpisode(Number(mediaId), Number(seasonNumber), episodeNumber, value, currentRating?.id)
        )
    }

    console.log('render')

    if(isRatingFetching) return <Skeleton width={150} variant={'text'}/>
    return (
        <div style={{marginLeft: '5px'}}>
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
                        <DeleteOutlineIcon onClick={DeleteRating}/>
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
                            setIsLoading(true)
                            rateCurrentEpisode(newValue * 2);
                        }
                    }}
                />}
        </div>
    );
};

