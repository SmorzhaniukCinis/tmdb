import React from 'react';
import {Paper} from "@mui/material";
import {useSelector} from "react-redux";
import {getMovieDetailsSelector} from "../store/Selectors/movieSelectors";
import s from "../styles/mediaPage.module.css";
import {RecommendationItem} from "./RecommendationItem";

export const Recommendations = () => {

    const {recommendations} = useSelector(getMovieDetailsSelector)
    console.log(recommendations)

    return (
        <Paper elevation={10} sx={{mt: 3}} >
                <span className={s.CastTitle}>
                    Recommendations
                </span>
            <div className={s.castAndCrewWrapper}>
                {recommendations.results.map((item, index) => {
                        if (index <= 10)
                            return (
                                <RecommendationItem key={item.id} item={item}/>
                            )
                    }
                )}
            </div>
        </Paper>
    );
};

