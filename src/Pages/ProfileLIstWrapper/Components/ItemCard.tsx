import React from 'react';
import {getImage} from "../../../Common/functions/getImage";
import {Box, Card, CardContent, Rating, Typography} from "@mui/material";
import s from "../ProfileListWrapper.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists, getIsDarkTheme} from "../../../store/Selectors/accountSelectors";
import {addToFavorite, addToWatchList} from "../../../store/accountReducer";
import {ListMenu} from "../../../Common/Components/ListMenu";
import {ActionMenu} from "../../SearchResult/Componnents/ActionMenu";
import {useNavigate} from "react-router-dom";
import {mediaType} from "../../../Common/types";
import {rateMovie} from "../../../store/movieReducer";
import {getIsRatingLoading} from "../../../store/Selectors/movieSelectors";
import ItemCardContent from "./ItemCardContent";

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


    const dispatch = useDispatch()
    const lists = useSelector(getCreatedLists)




    const markAsFavorite = () => {
        dispatch(addToFavorite(props.id, props.type, true))
    }
    const addToWatchListOnClick = () => {
        dispatch(addToWatchList(props.id, props.type, true))
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
                    <ItemCardContent media={props} />
                </div>
                <ActionMenu
                    markAsFavorite={markAsFavorite}
                    addToWatchListOnClick={addToWatchListOnClick}
                    openListsMenu={openListsMenu}
                    isVisible={true}
                />
            </Box>

            <ListMenu isOpen={open} setOpen={setOpen} lists={lists} mediaId={props.id} mediaType={props.type}/>

        </Card>
    );
};
