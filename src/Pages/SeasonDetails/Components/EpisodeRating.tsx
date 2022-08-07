import React, {useEffect, useState} from 'react';
import {Rating, Tooltip} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useDispatch, useSelector} from "react-redux";
import {getIsRatingLoading} from "../../../store/Selectors/movieSelectors";
import {deleteMovieRating, rateMovie} from "../../../store/movieReducer";
import {deleteTVRating, RateTV} from "../../../store/TVReducer";
import {useParams} from "react-router-dom";
import {mediaType} from "../../../Common/types";
import {accountStats} from "../../../API/movieAPI/movieTypes";

type props = {
    mediaType: mediaType
    movieStats: accountStats
    TVStats: accountStats
}

export const EpisodeRating:React.FC<props> = ({mediaType, movieStats, TVStats}:props) => {

    const isRatingLoading = useSelector(getIsRatingLoading)
    const [rating, setRating] = useState<number>(0)
    const params = useParams()
    const dispatch = useDispatch()

    const rateMedia = (value: number) => {
        if (params.media === 'movie') {
            dispatch(rateMovie(Number(params.mediaId), value))
        } else if (params.media === 'tv'){
            dispatch(RateTV(Number(params.mediaId), value))
        }
    }

    const deleteMediaRating = () => {
        if (params.media === 'movie') {
            dispatch(deleteMovieRating(Number(params.mediaId)))
        } else {
            dispatch(deleteTVRating(Number(params.mediaId)))
        }
    }

    useEffect(() => {
            if (mediaType === 'movie') {
                if (movieStats.rated) {
                    setRating(movieStats.rated.value)
                } else {
                    setRating(0)
                }
            } else if (mediaType === 'tv') {
                if (TVStats.rated) {
                    setRating(TVStats.rated.value)
                } else {
                    setRating(0)
                }
            }
        }, [movieStats.rated, TVStats.rated, mediaType]
    )


    return (
        <div>
            {rating
                ? <div>
                    <Rating
                        precision={0.5}
                        disabled={isRatingLoading}
                        sx={{cursor: 'pointer'}}
                        name="simple-controlled"
                        value={rating / 2}
                        onChange={(event, newValue) => {
                            if (newValue) {
                                setRating(newValue * 2)
                                rateMedia(newValue * 2);
                            }
                        }}
                    />
                    <Tooltip sx={{cursor: 'pointer', ml: 2}} title="Delete rating">
                        <DeleteOutlineIcon onClick={() => {
                            deleteMediaRating()
                            setRating(0)
                        }}/>
                    </Tooltip>
                </div>
                : <Rating
                    precision={0.5}
                    disabled={isRatingLoading}
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

