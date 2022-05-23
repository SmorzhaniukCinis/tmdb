import React, {useEffect} from 'react';
import {getMovieDetails} from "../store/movieReducer";
import {useDispatch, useSelector} from "react-redux";
import s from '../styles/moviePage.module.css'
import {getIsLoading, getMovieDetailsSelector, getMovieStats} from "../store/Selectors/movieSelectors";
import {getImage} from "../Common/getImage";
import {CircularProgress, Container, Rating, Tooltip, Typography} from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import WatchListIcon from "@mui/icons-material/AssignmentTurnedIn";
import GradingIcon from "@mui/icons-material/Grading";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useParams} from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export const MediaPage = () => {

    const dispatch = useDispatch()
    const movieDetails = useSelector(getMovieDetailsSelector)
    const isLoading = useSelector(getIsLoading)
    const movieStats = useSelector(getMovieStats)
    const params = useParams()

    useEffect(() => {
        if (params.media === 'movie') {
            dispatch(getMovieDetails(Number(params.mediaId)))
        }

    }, [dispatch])


    if (isLoading) {
        return <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={true}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
    } else {
        return (
            <Container>
                <div className={s.CommonInfoBloc}>
                    <img className={s.backdropImage} src={getImage("original", movieDetails.backdrop_path)} alt=''/>
                    <div style={{position: 'relative', zIndex: 2}}>
                        <div className={s.InfoWrapper}>
                            <div>
                                <img className={s.posterImage}
                                     src={getImage("original", movieDetails.poster_path)} alt=''/>
                            </div>
                            <div>
                                <div>
                                    <Typography sx={{fontSize: 35, fontWeight: 'bold'}}>
                                        {movieDetails.title}
                                        <span
                                            className={s.movieDate}>{`  (${parseInt(movieDetails.release_date)})`}</span>
                                    </Typography>
                                    <Typography>
                                    <span>
                                         {movieDetails.release_date?.replace(/-/g, '/')}
                                    </span>
                                        <span className={s.language}>
                                        {` (${movieDetails.original_language})`}
                                    </span>
                                        {movieDetails.genres
                                            ? movieDetails.genres.map(i =>
                                                <span className={s.genre} key={i.id}>{i.name}</span>)
                                            : null}
                                        <span className={s.runTime}>
                                        {movieDetails.runtime
                                            ? `${Math.floor(movieDetails.runtime / 60)} h. ${movieDetails.runtime % 60} min.`
                                            : null
                                        }
                                    </span>
                                    </Typography>
                                </div>
                                <div className={s.iconsWrapper}>
                                    <Tooltip title='Add to favorite'>
                                        <FavoriteIcon sx={{mr: 3, cursor:'pointer'}} fontSize={'large'}/>
                                    </Tooltip>
                                    <Tooltip title='Add to watchlist'>
                                        <WatchListIcon sx={{mr: 3, cursor:'pointer'}} fontSize={'large'}/>
                                    </Tooltip>
                                    <Tooltip title='Add to own list'>
                                        <GradingIcon sx={{mr: 3, cursor:'pointer'}} fontSize={'large'}/>
                                    </Tooltip>
                                    <div>
                                        <Tooltip title={`Votes: ${movieDetails.vote_count}`} followCursor>
                                            <Typography sx={{m: 1, width: '120px'}}>
                                                {`Users score: ${movieDetails.vote_average}`}
                                            </Typography>
                                        </Tooltip>
                                    </div>
                                    <div>
                                        {movieStats.rated
                                            ? <div>
                                                <Rating
                                                    name="simple-controlled"
                                                    value={movieStats.rated.value}
                                                    onChange={(event, newValue) => {
                                                        // setValue(newValue);
                                                    }}
                                                />
                                                <Tooltip sx={{cursor: 'pointer', ml: 2}} title="Delete rating">
                                                    <DeleteOutlineIcon/>
                                                </Tooltip>
                                            </div>
                                            : <Rating
                                                name="simple-controlled"
                                                value={null}
                                                onChange={(event, newValue) => {
                                                    // setValue(newValue);
                                                }}
                                            />}
                                    </div>
                                </div>
                                <div>
                                    <Typography variant={'h5'}>
                                        Overview
                                    </Typography>
                                    <Typography>
                                        {movieDetails.overview}
                                    </Typography>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        );
    }


};

