import React from 'react';
import {CircleMediaRating} from "../CircleMediaRating/CircleMediaRating";
import {getImage} from "../../functions/getImage";
import {mediaCardType} from "../../types";
import s from './SliderListItem.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';

type props = {
    media: mediaCardType
}


export const SliderListItem:React.FC<props> = ({media}:props) => {


    return (
        <div >
            <Card sx={{ width: 250 }}>
                <CardActionArea>
                    <div>
                        <CardMedia
                            component="img"
                            width='200px'
                            image={getImage('original', media.posterPath)}
                            alt="Media Image"
                        />
                        <div className={s.ratingWrapper}>
                            <CircleMediaRating/>
                        </div>
                    </div>

                    <CardContent sx={{padding: 0}}>

                        item
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

