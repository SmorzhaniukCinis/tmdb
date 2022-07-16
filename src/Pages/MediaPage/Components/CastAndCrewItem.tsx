import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {castItemType} from "../../../API/movieAPI/movieTypes";
import {getImage} from "../../../Common/functions/getImage";
import {useNavigate} from "react-router-dom";
import NoImage from '../../../assets/noUserPhoto.png'
import {castTVItem} from "../../../API/TVAPI/TVTypes";

type props = {
    item: castItemType| castTVItem
}

export const CastAndCrewItem:React.FC<props> = ({item}:props) => {

    const navigate = useNavigate()

    return (
        <Card sx={{m:1}} onClick={() => navigate(`/person/${item.id}`)}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={getImage('original', item.profile_path) || NoImage}
                    alt="no image"
                />
                <CardContent>
                    <Typography gutterBottom component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {/*@ts-ignore*/}
                        {item.character || item.roles[0].character}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
