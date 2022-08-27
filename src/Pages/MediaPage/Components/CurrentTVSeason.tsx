import React from 'react';
import {Paper} from "@mui/material";
import {SeasonItem} from "../../../Common/Components/SeasonItem/SeasonItem";
import {useSelector} from "react-redux";
import {getTVDetails} from "../../../store/Selectors/tvSelectors";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import s from '../mediaPage.module.css'

type props = {
    tvId: string | undefined
}

export const CurrentTVSeason:React.FC<props> = ({tvId}:props) => {

    const {seasons, id} = useSelector(getTVDetails)

    return (
        <Paper sx={{mt: 4, p: 3}} elevation={10}>
            <Typography sx={{mb: 2}} variant={'h5'}>Current season</Typography>
            <SeasonItem season={seasons.slice(-1)[0]} tvId={id}/>
            <Link className={s.viewAllSeason} to={`/tv/${tvId}/seasons`}>View all seasons</Link>
        </Paper>
    );
};

