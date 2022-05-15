import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {resultType} from "../store/searchReducer";
import {getImage} from "../Common/getImage";
import noPhoto from '../assets/No-image-available.jpg'


type props = {
    item: resultType
}

export const PersonCard:React.FC<props> = ({item}:props) => {
    return (
        <Card sx={{ maxWidth: 345, m: 1}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={getImage('original' , item.profile_path) || noPhoto}
                    alt='no photo'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

