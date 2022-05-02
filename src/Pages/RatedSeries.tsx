import React, {useEffect} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import s from '../styles/ProfileListWrapper.module.css'
import {Link} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getRatedSeries} from "../store/Selectors/accountSelectors";
import {getRatedTVEpisodes} from "../store/accountReducer";
import {EpisodeItem} from "../components/EpisodeItem";
import {getIsAuth} from "../store/Selectors/authSelectors";

export const RatedSeries = () => {
    const dispatch = useDispatch()
    const series = useSelector(getRatedSeries)
    const isAuth = useSelector(getIsAuth)

    useEffect(()=> {
        if (isAuth) {
            dispatch(getRatedTVEpisodes())
        }
    },[dispatch, isAuth])

    console.log(series)

    return (
        <div>
            <Link color="primary" href={'/ratings'}>
                <ArrowBackIcon color="primary" fontSize="small"/>
                <span className={s.backLink}>
                    back
                </span>
            </Link>
            <div>
                {series.results.map(item => <EpisodeItem item={item} key={item.id}/>)}
            </div>
        </div>
    );
};

