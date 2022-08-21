import React from 'react';
import {CircleMediaRating} from "../CircleMediaRating/CircleMediaRating";
import {getImage} from "../../functions/getImage";
import {mediaCardType} from "../../types";
import s from './SliderListItem.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';
import {useNavigate} from "react-router-dom";

type props = {
    media: mediaCardType
}


export const SliderListItem:React.FC<props> = ({media}:props) => {

    const navigate = useNavigate()


    return (
        <div >
            <Card elevation={3} sx={{ width: 250, mr: 1 }} onClick={() => navigate(`${media.type}/${media.id}`)}>
                <CardActionArea>
                    <div>
                        <CardMedia
                            component="img"
                            width='200px'
                            image={getImage('original', media.posterPath)}
                            alt="Media Image"
                        />
                        <div className={s.ratingWrapper}>
                            <CircleMediaRating voteCount={media.voteCount} voteAverage={media.voteAverage}/>
                        </div>
                    </div>

                    <CardContent sx={{padding: 0, height: '12px'}}>
                        <span className={media.name.length > 22 ? s.cardItemName__SmallFont :s.cardItemName}>
                            {media.name}
                        </span>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

