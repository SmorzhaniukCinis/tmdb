import React, {useState} from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {resultType} from "../../../store/searchReducer";
import {getImage} from "../../../Common/functions/getImage";
import s from '../../Home/homePage.module.css'
import NoImageAvailable from '../../../assets/No-image-available.jpg'
import {ActionMenu} from "./ActionMenu";
import {addToFavorite, addToWatchList} from "../../../store/accountReducer";
import {ListMenu} from "../../../Common/Components/ListMenu";
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists} from "../../../store/Selectors/accountSelectors";
import {useNavigate} from "react-router-dom";

type props = {
    item: resultType
    mediaType: 'movie' | 'tv'
}

export const SearchItem: React.FC<props> = ({item, mediaType}: props) => {

    const lists = useSelector(getCreatedLists)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isMenuVisible, setIsMenuVisible] = useState(false)


    const markAsFavorite = () => {
        dispatch(addToFavorite(item.id, mediaType, true))
    }
    const addToWatchListOnClick = () => {
        dispatch(addToWatchList(item.id, mediaType, true))
    }

    const [open, setOpen] = React.useState(false);
    const openListsMenu = () => {
        setOpen(true);
    }

    const goToMedia = (id: number) => {
        if (mediaType === 'movie') {
            navigate(`/movie/${id}`)
        } else navigate(`/tv/${id}`)

    }


    return (
        <Card onMouseLeave={() => setIsMenuVisible(false)}
              onMouseOver={() => setIsMenuVisible(true)}
              sx={{maxWidth: 250, minHeight: '500px', margin: '10px'}}>

            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"
                    onClick={() => goToMedia(item.id)}
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

            <ListMenu isOpen={open} setOpen={setOpen} lists={lists} mediaId={item.id} mediaType={mediaType}/>

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

