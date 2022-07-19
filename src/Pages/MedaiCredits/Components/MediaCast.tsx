import React from 'react';
import s from "../MediaCredits.module.css";
import {Box} from "@mui/material";
import {commonCastType} from "../../../API/movieAPI/movieTypes";
import {MediaCreditsItem} from "./MediaCreditsItem";

type props = {
    cast: commonCastType[] | undefined
    goToPerson: (id:number) => void
}

export const MediaCast: React.FC<props> = ({cast, goToPerson}: props) => {
    return (
        <Box sx={{width:'50%'}}>
            <h5 className={s.title}>
                <span>Cast</span>
                <span className={s.itemCount}>({cast?.length})</span>
            </h5>
            {
                cast?.map(item =>
                    <MediaCreditsItem job={item.character} goToPerson={goToPerson} item={item}/>
                )
            }
        </Box>
    );
};

