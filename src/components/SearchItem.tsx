import React, {useState} from 'react';
import {Card, CardActionArea, CardContent, CardMedia, styled, Typography} from "@mui/material";
import {resultType} from "../store/searchReducer";
import {getImage} from "../Common/getImage";
import s from '../styles/homePage.module.css'
import NoImageAvailable from '../assets/No-image-available.jpg'
import {ActionMenu} from "./ActionMenu";
import {addToFavorite, addToWatchList} from "../store/accountReducer";
import {ListMenu} from "./ListMenu";
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists} from "../store/Selectors/accountSelectors";
import {SpeedDial} from "@mui/lab";
import {MovieType, TVType} from "../API/SearchAPI/searchTypes";

type props = {
    item: resultType
}

export const SearchItem: React.FC<props> = ({item}: props) => {

    const lists = useSelector(getCreatedLists)
    const dispatch = useDispatch()
    const [isMenuVisible, setIsMenuVisible] = useState(false)


    const markAsFavorite = () => {
        dispatch(addToFavorite(item.id, item.media_type, true))
    }
    const addToWatchListOnClick = () => {
        dispatch(addToWatchList(item.id, item.media_type, true))
    }

    const [open, setOpen] = React.useState(false);
    const openListsMenu = () => {
        setOpen(true);
    }




    return (
        <Card onMouseLeave={() => setIsMenuVisible(false)}
              onMouseOver={() => setIsMenuVisible(true)}
              sx={{maxWidth: 250, minHeight: '500px', margin: '10px'}}>

            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"
                    image={getImage("original", item.poster_path) || NoImageAvailable}
                />
                <CardContent>


                    <Typography className={s.searchName} component="div">
                        <abbr title={item.name || item.title}>
                            {item.name || item.title}
                        </abbr>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.first_air_date || item.release_date || 'No date'}
                    </Typography>
                    <Typography className={s.searchDesc}>
                        {item.overview || 'No overview'}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <ListMenu isOpen={open} setOpen={setOpen} lists={lists} mediaId={item.id}/>
            <div className={s.speedMenu}>
                <ActionMenu
                    markAsFavorite={markAsFavorite}
                    addToWatchListOnClick={addToWatchListOnClick}
                    openListsMenu={openListsMenu}
                    isVisible={isMenuVisible}
                />
            </div>
        </Card>
    );
};

