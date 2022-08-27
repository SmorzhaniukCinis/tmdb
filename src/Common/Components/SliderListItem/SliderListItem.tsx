import React, {useState} from 'react';
import {CircleMediaRating} from "../CircleMediaRating/CircleMediaRating";
import {getImage} from "../../functions/getImage";
import {mediaCardType, mediaType} from "../../types";
import s from './SliderListItem.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {ActionMenu} from "../../../Pages/SearchResult/Componnents/ActionMenu";
import {addToFavorite, addToWatchList} from "../../../store/accountReducer";
import {useDispatch, useSelector} from "react-redux";
import {ListMenu} from "../ListMenu";
import {getCreatedLists} from "../../../store/Selectors/accountSelectors";

type props = {
    media: mediaCardType
}


export const SliderListItem:React.FC<props> = ({media}:props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const lists = useSelector(getCreatedLists)
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [open, setOpen] = React.useState(false);

    const markAsFavorite = () => {
        dispatch(addToFavorite(media.id, media.type, true))
    }
    const addToWatchListOnClick = () => {
        dispatch(addToWatchList(media.id, media.type, true))
    }

    const openListsMenu = () => {
        setOpen(true);
    }
    const goToMedia = (mediaType: mediaType, mediaId: number) => {
        navigate(`${mediaType}/${mediaId}`)
    }


    return (
        <div>
            <Card
                elevation={3}
                onMouseLeave={() => setIsMenuVisible(false)}
                onMouseOver={() => setIsMenuVisible(true)}
                sx={{ width: 250, mr: 1 }}>
                    <div>
                        <CardMedia
                            component="img"
                            sx={{cursor: 'pointer'}}
                            width='200px'
                            height='375px'
                            image={getImage('original', media.posterPath)}
                            alt={getImage('original', media.posterPath)}
                            onClick={() => goToMedia(media.type, media.id)}
                        />
                        <div className={s.ratingWrapper}>
                            <CircleMediaRating voteCount={media.voteCount} voteAverage={media.voteAverage}/>
                        </div>
                        <div className={s.ratingWrapper}>
                            <ListMenu isOpen={open} setOpen={setOpen} lists={lists} mediaId={media.id}/>
                            <ActionMenu
                                markAsFavorite={markAsFavorite}
                                addToWatchListOnClick={addToWatchListOnClick}
                                openListsMenu={openListsMenu}
                                isVisible={isMenuVisible}
                            />
                        </div>
                    </div>
                    <CardContent sx={{p: 0, height: 0, cursor: 'pointer'}}
                                 onClick={() => goToMedia(media.type, media.id)}>
                        <span className={media.name.length > 22 ? s.cardItemName__SmallFont :s.cardItemName}>
                            {media.name}
                        </span>
                    </CardContent>
            </Card>
        </div>
    );
};

