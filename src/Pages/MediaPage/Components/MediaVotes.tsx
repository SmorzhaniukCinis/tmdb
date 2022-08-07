import React from 'react';
import {Tooltip, Typography} from "@mui/material";

type props = {
    voteCount: number
    voteAverage: number
}

export const MediaVotes:React.FC<props> = ({voteCount, voteAverage}: props) => {
    return (
            <Tooltip title={`Votes: ${voteCount}`} followCursor>
                <Typography sx={{m: 1, width: '120px'}}>
                    {`Users score: ${voteAverage}`}
                </Typography>
            </Tooltip>
    );
};
