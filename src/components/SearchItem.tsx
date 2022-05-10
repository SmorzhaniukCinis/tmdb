import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {resultType} from "../store/searchReducer";
import {getImage} from "../Common/getImage";
import s from '../styles/homePage.module.css'

type props = {
    item: resultType
}


export const SearchItem:React.FC<props> = ({item}:props) => {
    return (
        <Card sx={{ maxWidth: 250 , margin: '10px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"
                    image={getImage("original" , item.poster_path)}
                />
                <CardContent>
                    <Typography className={s.searchName} component="div">
                        <abbr title={item.name || item.title}>
                            {item.name || item.title}
                        </abbr>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.first_air_date || item.release_date}
                    </Typography>
                    <Typography className={s.searchDesc}>
                        {item.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

