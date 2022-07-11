import React, {useEffect} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import s from '../ProfileLIstWrapper/ProfileListWrapper.module.css'
import {Link, Pagination, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getRatedSeries} from "../../store/Selectors/accountSelectors";
import {getRatedTVEpisodes} from "../../store/accountReducer";
import {EpisodeItem} from "./Components/EpisodeItem";
import {getIsAuth} from "../../store/Selectors/authSelectors";
import {Loader} from "../../Common/Components/Loader";

export const RatedSeries = () => {
    const dispatch = useDispatch()
    const series = useSelector(getRatedSeries)
    const isAuth = useSelector(getIsAuth)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        if (isAuth) {
            dispatch(getRatedTVEpisodes(1))
        }
    }, [dispatch, isAuth])

    const [page, setPage] = React.useState(1);
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };


    if (isLoading) return <Loader/>

    return (
        <div>
            <div className={s.titleWrapper}>
                <Link color="primary" href={'/ratings'}>
                    <ArrowBackIcon color="primary" fontSize="small"/>
                    <span className={s.backLink}>
                    back
                </span>
                </Link>
                <Typography className={s.seriesPageTitle} variant={'h5'}>
                    {`My rated TV episodes`}
                </Typography>
            </div>
            <div>
                {series.results.map(item => <EpisodeItem item={item} key={item.id}/>)}
            </div>
            {(series?.total_pages && series?.total_pages > 1)
                ? <Pagination page={page} onChange={handleChangePage} count={series?.total_pages}/>
                : null}
        </div>
    );
};

