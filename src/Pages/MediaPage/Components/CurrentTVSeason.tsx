import React from 'react';
import {Paper} from "@mui/material";
import MediaControlCard from "../../../Common/Components/SeasonItem";
import {Link} from "react-router-dom";

export const CurrentTVSeason = () => {
    return (
        <Paper sx={{mt: 4, p: 3}} elevation={10}>
            <MediaControlCard/>
            {/*<Link to={`/tv/${tvId}/seasons}`}>View all seasons</Link>*/}
        </Paper>
    );
};

