import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {episode} from "../../../API/TVAPI/TVTypes";
import s from '../SeasonDetails.module.css'
import {getImage} from "../../../Common/functions/getImage";
import StarIcon from '@mui/icons-material/Star';
import {MediaVotes} from "../../MediaPage/Components/MediaVotes";
import MediaRating from "../../MediaPage/Components/MediaRating";
import {EpisodeRating} from "./EpisodeRating";

type props = {
    episode: episode
}

export const EpisodeItem:React.FC<props> = ({episode}:props) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div className={s.mainBlockWrapper}>
                    <img className={s.image} src={getImage('original', episode.still_path)} alt="poster"/>
                    <Typography sx={{p: 5}}>
                        <span className={s.episodeNumber}>{episode.episode_number}</span>
                        <span className={s.episodeName}>{episode.name}</span>
                        {episode.air_date && <span className={s.episodeDate}>({episode.air_date})</span>}
                    </Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    <MediaVotes voteCount={episode.vote_count} voteAverage={episode.vote_average}/>
                    {/*<EpisodeRating />*/}
                </div>
                {episode.runtime}
            </AccordionDetails>
        </Accordion>
    );
};

