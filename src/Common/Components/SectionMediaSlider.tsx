import React from 'react';
import Typography from "@mui/material/Typography";
import {SliderListItem} from "./SliderListItem";
import {Paper} from "@mui/material";
import {SliderListContent} from "./SliderListContent";
import {mediaCardType} from "../types";

type props  = {
    title: string
    content: mediaCardType[]
}

export const SectionMediaSlider = ({title, content}:props) => {
    return (
        <Paper elevation={10} sx={{mt: 4, p: 2}}>
            <Typography variant={'h4'} sx={{fontSize: 28, mb: 2}}>
                {title}
            </Typography>
            <SliderListContent content={content}/>
        </Paper>
    );
};
