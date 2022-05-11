import React, {useEffect} from 'react';
import {getImage} from "../Common/getImage";
import {Box, Card, CardContent, Typography} from "@mui/material";
import s from "../styles/ProfileListWrapper.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists, getIsDarkTheme} from "../store/Selectors/accountSelectors";
import {Rating, SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import WatchListIcon from '@mui/icons-material/AssignmentTurnedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {addToFavorite, addToWatchList, getCreatedList} from "../store/accountReducer";
import GradingIcon from '@mui/icons-material/Grading';
import {ListMenu} from "./ListMenu";
import {ActionMenu} from "./ActionMenu";

type props = {
    type: 'movie' | 'tv'
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

    const markAsFavorite = () => {
        dispatch(addToFavorite(props.id , props.type , true ))
    }
    const addToWatchListOnClick = () => {
        dispatch(addToWatchList(props.id , props.type , true ))
    }

    const [open, setOpen] = React.useState(false);
    const openListsMenu = () => {
        setOpen(true);
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
                            <img height={'300px'} src={getImage('w200', props.posterPath)} alt=""/>
                        </div>
                        <div>
                            <Typography variant="h4" component="div">
                                {props.originalTitle}
                            </Typography>
                            <Typography>
                                {props.releaseDate}&nbsp;
                                <span className={s.language}>({props.language})</span>
                            </Typography>
                            {
                                props.rating
                                    ? <Typography>
                                        <Rating name="half-rating" defaultValue={props.rating / 2} precision={0.5}/>
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
                />
            </Box>


            <ListMenu isOpen={open} setOpen={setOpen} lists={lists} mediaId={props.id}/>

        </Card>
    );
};
