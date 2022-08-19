import React from 'react';
import Typography from "@mui/material/Typography";
import {SliderListItem} from "../SliderListItem/SliderListItem";
import {Paper} from "@mui/material";
import {mediaCardType} from "../../types";
import s from './MediaSlider.module.css'

type props  = {
    title: string
    content: mediaCardType[]
}

export const MediaSlider = ({title, content}:props) => {
    return (
        <Paper elevation={10} sx={{mt: 4, p: 2}}>
            <Typography variant={'h4'} sx={{fontSize: 28, mb: 2}}>
                {title}
            </Typography>
            <div className={s.sliderContentContainer}>
                {
                    content.map( item => <SliderListItem media={item} key={item.id}/>)
                }
            </div>
        </Paper>
    );
};
