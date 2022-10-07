import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists, getIsLoading} from "../../store/Selectors/accountSelectors";
import {getCreatedList} from "../../store/accountReducer";
import {getIsAuth} from "../../store/Selectors/authSelectors";
import {Button, Link, Pagination, Typography} from "@mui/material";
import s from '../ProfileLIstWrapper/ProfileListWrapper.module.css'
import {Loader} from "../../Common/Components/Loader";
import MyListItem from "./Components/MyListItem";

const MyLists = () => {

    const createdLists = useSelector(getCreatedLists)
    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        if (isAuth)
            dispatch(getCreatedList())
    }, [isAuth, dispatch])

    const [page, setPage] = React.useState(1);
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };


    if (isLoading) return <Loader/>

    return (
        <div>
            <div className={s.myListTitleWrapper}>
                <Typography variant={'h5'} className={s.myListTitle}>
                    My lists
                    <span className={s.myListResultCount}>
                        {createdLists.total_results}
                    </span>
                </Typography>
                <Button sx={{marginLeft: '30px', marginBottom: '10px'}} variant={'contained'}>
                    <Link sx={{color: 'inherit', textDecoration: 'none',}} href={'/newList'}>Create new list</Link>
                </Button>
            </div>
            <div className={s.listWrapper}>
                {createdLists.results.map(list => <MyListItem list={list} key={list.id}/>)}
            </div>
            {(createdLists?.total_pages && createdLists?.total_pages > 1)
                ? <Pagination page={page} onChange={handleChangePage} count={createdLists?.total_pages}/>
                : null}
        </div>
    );
};

export default MyLists;