import React from 'react';
import {Typography} from "@mui/material";

type props = {
    overview: string | null
}

const MediaOverview:React.FC<props> = ({overview}:props) => {
    return (
        <div>
            <Typography variant={'h5'}>
                Overview
            </Typography>
            <Typography>
                {overview || 'No overview'}
            </Typography>
        </div>
    );
};

export default MediaOverview;