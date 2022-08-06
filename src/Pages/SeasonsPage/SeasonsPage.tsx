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

export const SeasonsPage = () => {

    const dispatch = useDispatch()
    const {mediaId} = useParams()
    const seasonsDetails = useSelector(getTVSeason)
    const {seasons, id} = useSelector(getTVDetails)

    useEffect(() => {
        dispatch(GetTVDetails(Number(mediaId)))
    }, [mediaId, dispatch])

    useEffect(() => {
        if (seasons) {
            dispatch(GetSeason(Number(mediaId), seasons.length))
        }
    }, [dispatch, mediaId, seasons])

    return (
        <Paper elevation={10}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion>
        </Paper>
    );
};

