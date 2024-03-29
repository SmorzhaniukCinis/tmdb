import React from 'react';
import Typography from "@mui/material/Typography";
import {SliderListItem} from "../SliderListItem/SliderListItem";
import {Paper} from "@mui/material";
import {mediaCardType, mediaType} from "../../types";
import s from './MediaSlider.module.css'
import {Link} from "react-router-dom";

type props = {
    title: string
    mediaType?: mediaType
    content: mediaCardType[]
    linkParams: string
}

export const MediaSlider = ({title, content, mediaType, linkParams}: props) => {
    return (
        <Paper elevation={10} sx={{mt: 4, p: 2}}>
            <Typography variant={'h4'} sx={{fontSize: 28, mb: 2}}>
                {title}
            </Typography>
            <div className={s.sliderContentContainer}>
                {
                    content?.map(item => <SliderListItem media={item} key={item.id}/>)
                }
            </div>
            {mediaType
                ? <Link to={`/discover/${mediaType}?section=${linkParams}`} className={s.seeMoreLink}>
                    see more...
                </Link>
                : null}
        </Paper>
    );
};
