import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {getMovieDetailsSelector} from "../../../store/Selectors/movieSelectors";
import s from '../mediaPage.module.css'
import {CastAndCrewItem} from "./CastAndCrewItem";
import {Paper} from "@mui/material";
import {Link} from "react-router-dom";
import {mediaType} from "../../../Common/types";
import {credits} from "../../../API/movieAPI/movieTypes";
import {getTVDetails} from "../../../store/Selectors/tvSelectors";
import {aggregate_creditsType} from "../../../API/TVAPI/TVTypes";

type props = {
    mediaType: mediaType
    id: number
}

export const MediaCredits:React.FC<props> = ({mediaType, id}:props) => {

    const {credits} = useSelector(getMovieDetailsSelector)
    const {aggregate_credits} = useSelector(getTVDetails)
    const [currentCredits, setCurrentCredits] = useState<credits | aggregate_creditsType>()

    useEffect(() => {
        if(mediaType === 'movie') {
            setCurrentCredits(credits)
        } else {
            setCurrentCredits(aggregate_credits)
        }
    }, [mediaType, credits, aggregate_credits])




    return (
        <Paper elevation={10} sx={{mt: 3}} >
                <span className={s.CastTitle}>
                    Top Billed Cast
                    <Link className={s.castAndCrewLink} to={`/${mediaType}/${id}/people`}>View more...</Link>
                </span>
            <div className={s.castAndCrewWrapper}>
                {currentCredits?.cast.map((item, index) => {
                        if (index <= 10)
                            return (
                                <CastAndCrewItem key={item.id} item={item}/>
                            )
                    }
                )}
            </div>
        </Paper>
    );
};

