import React, {useEffect, useState} from 'react';
import s from "../styles/moviePage.module.css";
import {Rating, Tooltip, Typography} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchListIcon from "@mui/icons-material/AssignmentTurnedIn";
import GradingIcon from "@mui/icons-material/Grading";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useSelector} from "react-redux";
import {getIsRatingLoading, getMovieStats} from "../store/Selectors/movieSelectors";

type props = {
    voteCount: number
    voteAverage: number
    rateMedia: (value:number)=>void
    deleteMediaRating: ()=>void
}

export const MediaTools = ({voteCount, voteAverage, rateMedia, deleteMediaRating}:props) => {

    const movieStats = useSelector(getMovieStats)
    const isRatingLoading = useSelector(getIsRatingLoading)
    const [rating, setRating] = useState<number>(0)

    useEffect(()=>{
        if(movieStats.rated) {
            debugger
            setRating(movieStats.rated.value)
        }
    },[])

    return (
        <div className={s.iconsWrapper}>
            <Tooltip title='Add to favorite'>
                <FavoriteIcon sx={{mr: 3, cursor: 'pointer'}} fontSize={'large'}/>
            </Tooltip>
            <Tooltip title='Add to watchlist'>
                <WatchListIcon sx={{mr: 3, cursor: 'pointer'}} fontSize={'large'}/>
            </Tooltip>
            <Tooltip title='Add to own list'>
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
                            sx={{cursor:'pointer'}}
                            name="simple-controlled"
                            value={rating/2}
                            onChange={(event, newValue) => {
                                if(newValue) {
                                    setRating(newValue*2)
                                    rateMedia(newValue*2);
                                }
                            }}
                        />
                        <Tooltip sx={{cursor: 'pointer', ml: 2}} title="Delete rating">
                            <DeleteOutlineIcon onClick={()=>{
                                deleteMediaRating()
                                setRating(0)
                            }}/>
                        </Tooltip>
                    </div>
                    : <Rating
                        precision={0.5}
                        disabled={isRatingLoading}
                        sx={{cursor:'pointer'}}
                        name="simple-controlled"
                        value={null}
                        onChange={(event    , newValue) => {
                            if(newValue) {
                                setRating(newValue*2)
                                rateMedia(newValue*2);
                            }
                        }}
                    />}
            </div>
        </div>
    )
}
