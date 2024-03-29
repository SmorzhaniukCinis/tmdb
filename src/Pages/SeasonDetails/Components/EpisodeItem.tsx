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
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div className={s.mainBlockWrapper}>
                    <img className={s.image} src={getImage('original', episode.still_path)} alt="poster"/>
                    <Typography sx={{p: 5, ml: 2}}>
                        <span className={s.episodeNumber}>{episode.episode_number}</span>
                        <span className={s.episodeName}>{episode.name}</span>
                        {episode.air_date && <span className={s.episodeDate}>({episode.air_date})</span>}
                    </Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails className={s.EpisodeDetails}>
                <div className={s.detailsLeftSide}>
                    <MediaVotes voteCount={episode.vote_count} voteAverage={episode.vote_average}/>
                    <EpisodeRating episodeNumber={episode.episode_number} episodeId={episode.id} />
                    <Typography sx={{ml: 1}}>{`Duration: ${episode.runtime} min.`}</Typography>
                </div>
                <Typography sx={{width: '80%',mr: 2}}>
                    {episode.overview || 'No overview'}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

