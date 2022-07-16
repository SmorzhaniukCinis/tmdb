import React, {useEffect} from 'react';
import {Tooltip} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchListIcon from "@mui/icons-material/AssignmentTurnedIn";
import GradingIcon from "@mui/icons-material/Grading";
import {addToFavorite, addToWatchList} from "../../../store/accountReducer";
import {getMovieStats} from "../../../store/movieReducer";
import {getTVStats} from "../../../store/TVReducer";
import {useDispatch} from "react-redux";
import {mediaStatsType} from "../../../API/TVAPI/TVTypes";
import { mediaType } from '../../../Common/types';

type props = {
    mediaId: number
    mediaType: mediaType
    TVStats:mediaStatsType
    movieStats: mediaStatsType
    openListsMenu: () => void
}

const MediaToolsButtons:React.FC<props> = ({mediaType, mediaId, TVStats, movieStats ,openListsMenu}:props) => {

    const [mediaStats, setMediaStats] = React.useState<mediaStatsType>();
    const dispatch = useDispatch()

    const markAsFavorite = (isFavorite: boolean) => {
        dispatch(addToFavorite(mediaId, mediaType, isFavorite))
        setTimeout(() => {
            if(mediaType === 'movie') {
                dispatch(getMovieStats(mediaId))
            }else {
                dispatch(getTVStats(mediaId))
            }
        }, 500)

    }
    const addToWatchListOnClick = (isWatchlist: boolean, mediaId:number, mediaType:mediaType) => {
        dispatch(addToWatchList(mediaId, mediaType, isWatchlist))
        setTimeout(() => {
            if(mediaType === 'movie') {
                dispatch(getMovieStats(mediaId))
            }else {
                dispatch(getTVStats(mediaId))
            }
        }, 500)
    }

    useEffect(()=>{
        if(mediaType === 'movie') {
            setMediaStats(movieStats)
        } else {
            setMediaStats(TVStats)
        }
    }, [mediaType, movieStats, TVStats])

    return (
        <div>
            {mediaStats?.favorite
                ? <Tooltip title='In your favorite'>
                    <FavoriteIcon
                        onClick={() => {markAsFavorite(false)}}
                        sx={{mr: 3, cursor: 'pointer'}} color={'secondary'} fontSize={'large'}/>
                </Tooltip>
                : <Tooltip title='Add to favorite'>
                    <FavoriteIcon
                        onClick={() => {
                            markAsFavorite(true)
                        }}
                        sx={{mr: 3, cursor: 'pointer'}} fontSize={'large'}/>
                </Tooltip>}
            {mediaStats?.watchlist
                ? <Tooltip title='In your watchlist'>
                    <WatchListIcon
                        onClick={() => {
                            addToWatchListOnClick(false, mediaId, mediaType)
                        }}
                        sx={{mr: 3, cursor: 'pointer'}} color={'secondary'} fontSize={'large'}/>
                </Tooltip>
                : <Tooltip title='Add to watchlist'>
                    <WatchListIcon
                        onClick={() => {
                            addToWatchListOnClick(true, mediaId, mediaType)
                        }}
                        sx={{mr: 3, cursor: 'pointer'}} fontSize={'large'}/>
                </Tooltip>}

            <Tooltip title='Add to own list' onClick={openListsMenu}>
                <GradingIcon sx={{mr: 3, cursor: 'pointer'}} fontSize={'large'}/>
            </Tooltip>

        </div>
    );
};

export default MediaToolsButtons;