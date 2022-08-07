import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {season} from "../../../API/TVAPI/TVTypes";
import {getImage} from "../../functions/getImage";
import moment from "moment";
import {useNavigate} from "react-router-dom";
import s from './SeasonItem.module.css'

type props = {
    season: season | undefined
    tvId: number
}

export const SeasonItem: React.FC<props> = ({season, tvId}: props) => {

    const navigate = useNavigate()

    return (
        <Card sx={{width: '100%', display: 'flex', height: 250, mb:2}}>
            <CardMedia
                onClick={() => navigate(`/tv/${tvId}/season/${season?.season_number}`)}
                sx={{width: '16%', h: 250, cursor: 'pointer'}}
                component="img"
                height="250"
                image={getImage('w200', season?.poster_path)}
                alt="season posten"
            />
            <CardContent>
                <Typography
                    onClick={() => navigate(`/tv/${tvId}/season/${season?.season_number}`)}
                    sx={{cursor: 'pointer', fontSize: 22, fontWeight: 'bold'}}
                >
                    {season?.name}
                </Typography>
                <Typography sx={{fontSize: 16, fontWeight: 'bold'}}>
                    <span>{moment(season?.air_date).format('YYYY')}</span>
                    <span>{` | ${season?.episode_count} Episodes`}</span>
                </Typography>
                <Typography className={s.overview} sx={{pt: 2}}>
                    {season?.overview || 'No overview'}
                </Typography>
            </CardContent>
        </Card>
    );
}
