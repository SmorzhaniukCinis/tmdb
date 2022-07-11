import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {getImage} from "../../../Common/functions/getImage";
import {recommendationType} from "../../../API/movieAPI/movieTypes";
import {CardActionArea} from "@mui/material";
import {useNavigate} from "react-router-dom";

type props = {
    item: recommendationType
}

export const RecommendationItem:React.FC<props> = ({item}:props) => {

    const navigate = useNavigate()

    const goToMedia = () => {
        navigate(`/movie/${item.id}`)
    }

    return (
        <Card sx={{ maxWidth: 345, m:1 }}>
            <CardActionArea onClick={goToMedia}>
                <CardMedia
                    component="img"
                    height="300"
                    image={getImage('original' , item.poster_path)}
                    alt="poster"
                />
                <CardContent>
                    <Typography sx={item.title.length>16 ? {fontSize: 12} : {fontSize: 18}}>
                        {item.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
