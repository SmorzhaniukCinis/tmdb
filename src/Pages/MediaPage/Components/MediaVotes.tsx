import React from 'react';
import {Tooltip, Typography} from "@mui/material";

type props = {
    voteCount: number
    voteAverage: number
}

const refactorVotes = ( voteAverage:number) => {
    if(voteAverage && voteAverage.toString().includes('.')) {
        return voteAverage.toFixed(1)
    }
    return voteAverage
}

export const MediaVotes:React.FC<props> = ({voteCount, voteAverage}: props) => {
    return (
            <Tooltip title={`Votes: ${voteCount}`} followCursor>
                <Typography sx={{m: 1, width: '120px'}}>
                    {`Users score: ${refactorVotes(voteAverage)}`}
                </Typography>
            </Tooltip>
    );
};
