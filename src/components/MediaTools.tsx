import React, {useEffect, useState} from 'react';
import s from "../styles/mediaPage.module.css";
import {Rating, Tooltip, Typography} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchListIcon from "@mui/icons-material/AssignmentTurnedIn";
import GradingIcon from "@mui/icons-material/Grading";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useDispatch, useSelector} from "react-redux";
import {getIsRatingLoading, getMovieStats} from "../store/Selectors/movieSelectors";
import {ListMenu} from "./ListMenu";
import {getCreatedLists} from "../store/Selectors/accountSelectors";
import {addToFavorite, addToWatchList} from "../store/accountReducer";
import {getStats} from "../store/movieReducer";
import {mediaType} from "../Common/types";

type props = {
    voteCount: number
    voteAverage: number
    rateMedia: (value: number) => void
    deleteMediaRating: () => void
    mediaId: number
    mediaType: mediaType
}

export const MediaTools = ({voteCount, voteAverage, rateMedia, deleteMediaRating, mediaId, mediaType}: props) => {

    const movieStats = useSelector(getMovieStats)
    const isRatingLoading = useSelector(getIsRatingLoading)
    const [rating, setRating] = useState<number>(0)
    const lists = useSelector(getCreatedLists)
    const dispatch = useDispatch()

    useEffect(() => {
        if (movieStats.rated) {
            setRating(movieStats.rated.value)
        }
    }, [movieStats.rated])

    const [open, setOpen] = React.useState(false);
    const openListsMenu = () => {
        setOpen(true);
    }
    const markAsFavorite = (isFavorite: boolean) => {
        dispatch(addToFavorite(mediaId, mediaType, isFavorite))
        setTimeout(()=> {
            dispatch(getStats(mediaId, mediaType))
        }, 500)

    }
    const addToWatchListOnClick = (isWatchlist: boolean) => {
        dispatch(addToWatchList(mediaId, mediaType, isWatchlist))
        setTimeout(()=> {
            dispatch(getStats(mediaId, mediaType))
        }, 500)
    }

    return (
        <div className={s.iconsWrapper}>
            {movieStats.favorite
                ? <Tooltip title='In your favorite'>
                    <FavoriteIcon
                        onClick={() => {
                            markAsFavorite(false)
                        }}
                        sx={{mr: 3, cursor: 'pointer'}} color={'secondary'} fontSize={'large'}/>
                </Tooltip>
                : <Tooltip title='Add to favorite'>
                    <FavoriteIcon
                        onClick={() => {
                            markAsFavorite(true)
                        }}
                        sx={{mr: 3, cursor: 'pointer'}} fontSize={'large'}/>
                </Tooltip>}
            {movieStats.watchlist
                ? <Tooltip title='In your watchlist'>
                    <WatchListIcon
                        onClick={() => {
                            addToWatchListOnClick(false)
                        }}
                        sx={{mr: 3, cursor: 'pointer'}} color={'secondary'} fontSize={'large'}/>
                </Tooltip>
                : <Tooltip title='Add to watchlist'>
                    <WatchListIcon
                        onClick={() => {
                            addToWatchListOnClick(true)
                        }}
                        sx={{mr: 3, cursor: 'pointer'}} fontSize={'large'}/>
                </Tooltip>}

            <Tooltip title='Add to own list' onClick={openListsMenu}>
                <GradingIcon sx={{mr: 3, cursor: 'pointer'}} fontSize={'large'}/>
            </Tooltip>

            <div>
                <Tooltip title={`Votes: ${voteCount}`} followCursor>
                    <Typography sx={{m: 1, width: '120px'}}>
                        {`Users score: ${voteAverage}`}
                    </Typography>
                </Tooltip>
            </div>
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
            <ListMenu isOpen={open} setOpen={setOpen} lists={lists} mediaId={mediaId}/>
        </div>
    )
}
