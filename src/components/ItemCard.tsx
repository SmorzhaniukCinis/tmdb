import React, {useState} from 'react';
import {getImage} from "../Common/getImage";
import {Box, Card, CardContent, Rating, Typography} from "@mui/material";
import s from "../styles/ProfileListWrapper.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists, getIsDarkTheme} from "../store/Selectors/accountSelectors";
import {addToFavorite, addToWatchList} from "../store/accountReducer";
import {ListMenu} from "./ListMenu";
import {ActionMenu} from "./ActionMenu";
import {useNavigate} from "react-router-dom";
import {mediaType} from "../Common/types";
import {rateMovie} from "../store/movieReducer";
import {getIsRatingLoading} from "../store/Selectors/movieSelectors";

type props = {
    type: mediaType
    id: number
    originalTitle: string
    releaseDate: string
    overview: string
    backdropPath: string | null
    language: string
    posterPath: string | null
    voteAverage: number
    voteCount: number
    rating: number | undefined
}

export const ItemCard: React.FC<props> = (props: props) => {

    const isDarkTheme = useSelector(getIsDarkTheme)
    const dispatch = useDispatch()
    const lists = useSelector(getCreatedLists)
    const navigate = useNavigate()
    const isRatingLoading = useSelector(getIsRatingLoading)


    const markAsFavorite = () => {
        dispatch(addToFavorite(props.id, props.type, true))
    }
    const addToWatchListOnClick = () => {
        dispatch(addToWatchList(props.id, props.type, true))
    }
    const goToMedia = (id: number, mediaType: mediaType) => {
        navigate(`/${mediaType}/${id}`)
    }

    const [open, setOpen] = React.useState(false);

    const openListsMenu = () => {
        setOpen(true);
    }
    const rateMedia = (value: number) => {
        if (props.type === 'movie') {
            dispatch(rateMovie(Number(props.id), value))
        } else {
            //get TV
        }
    }

    return (
        <Card variant={'outlined'} sx={{minWidth: '500px', height: '345px', m: 1}}>
            <Box sx={{height: 320, transform: 'translateZ(0px)', flexGrow: 1}}>
                <div style={{
                    background: `url(${getImage('original', props.backdropPath)})`,
                    backgroundSize: '100%'
                }}>
                    <CardContent className={isDarkTheme ? s.blackCardWrapper : s.witheCardWrapper}>
                        <div>
                            <img className={s.poster}
                                 onClick={() => goToMedia(props.id, props.type)}
                                 height={'300px'}
                                 src={getImage('w200', props.posterPath)}
                                 alt="poster"/>
                        </div>
                        <div>
                            <Typography
                                sx={{cursor: 'pointer'}}
                                variant="h4"
                                component="div"
                                onClick={() => goToMedia(props.id, props.type)}>
                                {props.originalTitle}
                            </Typography>
                            <Typography>
                                {props.releaseDate}&nbsp;
                                <span className={s.language}>({props.language})</span>
                            </Typography>
                            {
                                props.rating
                                    ? <Typography>
                                        <Rating onChange={(event, newValue) => {
                                            if (newValue) {
                                                rateMedia(newValue * 2)
                                            }
                                        }}
                                                name="half-rating"
                                                disabled={isRatingLoading}
                                                defaultValue={props.rating / 2} precision={0.5}/>
                                    </Typography>
                                    : null
                            }
                            <Typography sx={{mb: 1.5}} textOverflow={'test'}>
                                Users score:&nbsp;
                                <abbr title={`Votes: ${props.voteCount}`}>
                                    <span className={s.voteAverage}>{props.voteAverage}</span>
                                </abbr>
                            </Typography>
                            <Typography sx={{width: '60%'}} variant="body2">
                                {props.overview}
                            </Typography>
                        </div>
                    </CardContent>
                </div>
                <ActionMenu
                    markAsFavorite={markAsFavorite}
                    addToWatchListOnClick={addToWatchListOnClick}
                    openListsMenu={openListsMenu}
                    isVisible={true}
                />
            </Box>

            <ListMenu isOpen={open} setOpen={setOpen} lists={lists} mediaId={props.id}/>

        </Card>
    );
};
