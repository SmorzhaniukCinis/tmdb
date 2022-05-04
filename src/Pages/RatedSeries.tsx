import React, {useEffect} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import s from '../styles/ProfileListWrapper.module.css'
import {Backdrop, CircularProgress, Link, Pagination, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getRatedSeries} from "../store/Selectors/accountSelectors";
import {getRatedTVEpisodes} from "../store/accountReducer";
import {EpisodeItem} from "../components/EpisodeItem";
import {getIsAuth} from "../store/Selectors/authSelectors";

export const RatedSeries = () => {
    const dispatch = useDispatch()
    const series = useSelector(getRatedSeries)
    const isAuth = useSelector(getIsAuth)
    const isLoading = useSelector(getIsLoading)

    useEffect(()=> {
        if (isAuth) {
            dispatch(getRatedTVEpisodes(1))
        }
    },[dispatch, isAuth])

    const [page, setPage] = React.useState(1);
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };


    if(isLoading) {
        return (
            <div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>

        )

    } else {
        return (
            <div >
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
    }

};

