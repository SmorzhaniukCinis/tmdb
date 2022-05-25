import React from 'react';
import {useSelector} from "react-redux";
import {getMovieDetailsSelector} from "../store/Selectors/movieSelectors";
import s from '../styles/moviePage.module.css'
import {CastAndCrewItem} from "./CastAndCrewItem";
import {Button, Card, CardActions, CardContent, Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const MediaCredits = () => {

    const {credits} = useSelector(getMovieDetailsSelector)

    return (
        <Paper elevation={10} sx={{mt: 3}} >
                <span className={s.CastTitle}>
                    Top Billed Cast
                    <Link className={s.castAndCrewLink} to={'/'}>View more...</Link>
                </span>
            <div className={s.castAndCrewWrapper}>
                {credits.cast.map((item, index) => {
                        if (index <= 10)
                            return (
                                <CastAndCrewItem key={item.cast_id} item={item}/>
                            )
                    }
                )}
            </div>
        </Paper>
    );
};

