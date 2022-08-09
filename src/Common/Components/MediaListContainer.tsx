import React from 'react';
import Typography from "@mui/material/Typography";
import BlockContent from "../../Pages/ActualContent/Components/BlockContent";
import {Paper} from "@mui/material";

type props  = {
    title: string
}

export const MediaListContainer = ({title}:props) => {
    return (
        <Paper elevation={10} sx={{mt: 4, p: 2}}>
            <Typography variant={'h4'} sx={{fontSize: 28}}>
                {title}
            </Typography>
            <BlockContent/>
        </Paper>
    );
};
