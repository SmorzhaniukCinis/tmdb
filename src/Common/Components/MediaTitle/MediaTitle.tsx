import React, {useEffect} from 'react';
import s from "./mediaTitle.module.css";
import {Link} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";

type props = {
    title: string | undefined | null
    date: string | undefined | null
    mediaType: string | undefined | null
    mediaId: number | string | undefined | null
}

const MediaTitle:React.FC<props> = ({title, date, mediaType, mediaId}:props) => {

    useEffect(() => {
        const el = document.getElementById('topOfPage');
        el && el.scrollIntoView({block: 'center'});
    },[])

    return (
        <div id={"topOfPage"} className={s.mediaTitleWrapper}>
            <Link className={s.mediaTitle}
                  to={mediaType !== 'season'
                      ?`/${mediaType}/${mediaId}`
                      : `/tv/${mediaId}/seasons`} >
                <ArrowBackIcon fontSize={'small'} sx={{mr:1}}/>
                <span>{title}</span>
                <span className={s.mediaDate}>{` (${moment(date).format('YYYY')})`}</span>
            </Link>
        </div>
    );
};

export default MediaTitle;