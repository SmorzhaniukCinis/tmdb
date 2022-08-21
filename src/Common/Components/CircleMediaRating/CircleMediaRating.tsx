import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useSelector} from "react-redux";
import {getIsDarkTheme} from "../../../store/Selectors/accountSelectors";
import {createTheme, ThemeProvider} from "@mui/material";
import {ratingColor} from "./CircleTheme";
import '@fontsource/roboto/400.css';
import Tooltip from "@mui/material/Tooltip";

const ratingStyle = {
    boxShadow: '0px 0px 20px 5px #d7d3d3, inset 5em 1em rgb(255 255 255 / 0.8)',
    opacity: '80%',
    background: '9c27b0',
    borderRadius: '50%',
    width: '50px',
    height: '50px'
}
const ratingValueStyle = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}


type props = {
    voteAverage: number
    voteCount: number
}


export const CircleMediaRating:React.FC<props> = ({voteCount, voteAverage}:props) => {

    return (
        <Tooltip title={`Votes: ${voteCount}`}>
            <Box sx={{position: 'relative', display: 'inline-flex'}}>
            <ThemeProvider theme={ratingColor}>
                <CircularProgress color={'warning'}
                                  variant="determinate"
                                  thickness={5}
                                  value={voteAverage*10}
                                  style={ratingStyle}/>
            </ThemeProvider>
            <Box sx={ratingValueStyle}>
                <Typography variant={'body2'} color="black">
                    {`${Math.round(voteAverage*10)}%`}
                </Typography>
            </Box>
        </Box>
        </Tooltip>

    );
};
