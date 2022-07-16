import React, {useEffect, useState} from 'react';
import {Paper} from "@mui/material";
import {useSelector} from "react-redux";
import {getMovieDetailsSelector} from "../../../store/Selectors/movieSelectors";
import s from "../mediaPage.module.css";
import {RecommendationItem} from "./RecommendationItem";
import {mediaType} from "../../../Common/types";
import {getTVDetails} from "../../../store/Selectors/tvSelectors";
import {CommonResType} from "../../../API/accountAPI/accountTypes";
import {recommendationTVItem} from "../../../API/TVAPI/TVTypes";
import {recommendationType} from "../../../API/movieAPI/movieTypes";

type props = {
    mediaType: mediaType
}

export const Recommendations:React.FC<props> = ({mediaType}:props) => {

    const movieDetails = useSelector(getMovieDetailsSelector)
    const tvDetails = useSelector(getTVDetails)
    const [recommendations, setRecommendations] = useState<CommonResType<recommendationTVItem | recommendationType>>()

    useEffect(() => {
        if(mediaType === 'tv') {
            setRecommendations(tvDetails.recommendations)
        } else {
            setRecommendations(movieDetails.recommendations)
        }
    }, [mediaType, movieDetails.recommendations, tvDetails.recommendations])

    if(recommendations?.results.length) {
        return (
            <Paper elevation={10} sx={{mt: 3}} >
                <span className={s.CastTitle}>
                    Recommendations
                </span>
                <div className={s.castAndCrewWrapper}>
                    {recommendations.results.map((item, index) => {
                            if (index <= 10)
                                return (
                                    <RecommendationItem mediaType={mediaType} key={item.id} item={item}/>
                                )
                        }
                    )}
                </div>
            </Paper>
        );
    } else {
        return null
    }

};

