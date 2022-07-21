import React, {useEffect} from 'react';
import s from "./mediaTitle.module.css";
import {Link} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";

type props = {
    title: string | undefined | null
    date: string | undefined | null
    mediaType: string | undefined | null
    mediaId: string | undefined | null
}

const MediaTitle:React.FC<props> = ({title, date, mediaType, mediaId}:props) => {

    useEffect(() => {
        const el = document.getElementById('el');
        el && el.scrollIntoView({block: 'center'});
    },[])

    return (
        <div id={"el"} className={s.mediaTitleWrapper}>
            <Link className={s.mediaTitle} to={`/${mediaType}/${mediaId}`} >
                <ArrowBackIcon fontSize={'small'} sx={{mr:1}}/>
                <span>{title}</span>
                <span className={s.mediaDate}>{` (${moment(date).format('YYYY')})`}</span>
            </Link>
        </div>
    );
};

export default MediaTitle;