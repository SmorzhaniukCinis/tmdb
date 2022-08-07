import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GetSeason, GetTVDetails} from "../../store/TVReducer";
import {useParams} from "react-router-dom";
import {getTVDetails, getTVSeason} from "../../store/Selectors/tvSelectors";
import {Paper} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {SeasonItem} from "../../Common/Components/SeasonItem/SeasonItem";
import MediaTitle from "../../Common/Components/MediaTitle/MediaTitle";
import s from './SeasonPage.module.css'

export const SeasonsPage = () => {

    const dispatch = useDispatch()
    const {mediaId} = useParams()
    const {seasons, id, name, first_air_date} = useSelector(getTVDetails)

    useEffect(() => {
        dispatch(GetTVDetails(Number(mediaId)))
    }, [mediaId, dispatch])


    return (
        <Paper elevation={10} sx={{pb: 1}}>
            <MediaTitle title={name} date={first_air_date} mediaType={'tv'} mediaId={id}/>
            {
                seasons?.map(season => <div key={season.id} className={s.seasonCard}>
                    <SeasonItem season={season} tvId={id}/>
                </div>)
            }
        </Paper>
    )
}

