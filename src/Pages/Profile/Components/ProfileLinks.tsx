import React from 'react';
import {Button} from "@mui/material";
import s from '../Profile.module.css'
import {useNavigate} from "react-router-dom";

export const ProfileLinks = () => {

    const navigate = useNavigate()

    return (
        <div className={s.linksWrapper}>
            <Button onClick={() => navigate('/myLists')} variant="contained" size="large">
                Go to my Lists
            </Button>
            <Button onClick={() => navigate('/favorite')} variant="contained" size="large">
                Go to my favorite
            </Button>
            <Button onClick={() => navigate('/ratings')} variant="contained" size="large">
                Go to my Ratings
            </Button>
            <Button onClick={() => navigate('/watchList')} variant="contained" size="large">
                Go to my Watchlist
            </Button>
        </div>
    );
};

