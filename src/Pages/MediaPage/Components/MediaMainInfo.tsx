import React from 'react';
import {Typography} from "@mui/material";
import s from "../mediaPage.module.css";
import {commonMedia} from "../../../Common/functions/getCommonMedia";

type props = {
    currentMedia: commonMedia
}


const MediaMainInfo: React.FC<props> = ({currentMedia}: props) => {
    return (
        <div>
            <Typography sx={{fontSize: 35, fontWeight: 'bold'}}>
                {currentMedia.title}
                <span
                    className={s.movieDate}>{`  (${parseInt(currentMedia.release_date)})`}
                </span>
            </Typography>
            <Typography>
                <span>
                     {currentMedia.release_date?.replace(/-/g, '/')}
                </span>
                <span className={s.language}>
                    {` (${currentMedia.original_language})`}
                </span>
                {currentMedia.genres
                    ? currentMedia.genres.map(i =>
                        <span className={s.genre} key={i.id}>{i.name}</span>)
                    : null}
                <span className={s.runTime}>
                    {currentMedia.runtime
                        ? `${Math.floor(currentMedia.runtime / 60)} h. ${currentMedia.runtime % 60} min.`
                        : null
                    }
                </span>
            </Typography>
        </div>
    );
};

export default MediaMainInfo;