import React, {useEffect, useState} from 'react';
import {Rating, Tooltip} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getEpisodeStats} from "../../../store/episodeReducer";
import {getEpisodesRating} from "../../../store/Selectors/episodeSelectors";

type props = {
    episodeNumber: number
    episodeId: number
}

export const EpisodeRating:React.FC<props> = ({episodeNumber, episodeId}:props) => {

    const episodesRating = useSelector(getEpisodesRating)
    const {mediaId, seasonNumber} = useParams()
    const dispatch = useDispatch()
    const [currentRating, setCurrentRating] = useState<undefined| number | false>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        dispatch(getEpisodeStats(Number(mediaId), Number(seasonNumber), episodeNumber))
        }, [mediaId, episodeNumber, seasonNumber, dispatch]
    )

    useEffect(() => {
        setIsLoading(true)
        const temporaryRating = episodesRating.find(item => item.id === episodeId)
        setCurrentRating(temporaryRating?.rated !== false && temporaryRating?.rated.value)
        setIsLoading(false)
    },[episodeId, episodesRating])

    const setRating = (value: number) => {

    }
    const rateMedia = (value: number) => {

    }
    console.log(currentRating)
    return (
        <div>
            {currentRating
                ? <div>
                    <Rating
                        precision={0.5}
                        disabled={isLoading}
                        sx={{cursor: 'pointer'}}
                        name="simple-controlled"
                        value={currentRating / 2}
                        onChange={(event, newValue) => {
                            if (newValue) {
                                setRating(newValue * 2)
                                rateMedia(newValue * 2);
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
                            rateMedia(newValue * 2);
                        }
                    }}
                />}
        </div>
    );
};

