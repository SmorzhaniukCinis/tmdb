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
import {mediaType} from "../../../Common/types";
import {recommendationTVItem} from "../../../API/TVAPI/TVTypes";

type props = {
    item: recommendationType | recommendationTVItem
    mediaType: mediaType
}

export const RecommendationItem: React.FC<props> = ({item, mediaType}: props) => {

    const navigate = useNavigate()

    const goToMedia = () => {
        navigate(`/${mediaType}/${item.id}`)
    }

    // @ts-ignore
    return (
        <Card sx={{maxWidth: 345, m: 1}}>
            <CardActionArea  sx={{height: '100%'}} onClick={goToMedia}>
                <CardMedia
                    component="img"
                    height="300"
                    image={getImage('original', item.poster_path)}
                    alt="poster"
                />
                <CardContent>
                    {item.title
                        ?<Typography height={30} sx={item.title.length>15 ? {fontSize: 13} : {fontSize: 19}}>
                            {item.title}
                        </Typography>
                    : <Typography sx={item.name && item.name.length>15 ? {fontSize: 13} : {fontSize: 18}}>
                            {item.name}
                        </Typography>}

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
