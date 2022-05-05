import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists, getIsDarkTheme, getIsLoading} from "../store/Selectors/accountSelectors";
import {getCreatedList} from "../store/accountReducer";
import {getIsAuth} from "../store/Selectors/authSelectors";
import {Backdrop, Button, Card, CardContent, CircularProgress, Link, Pagination, Typography} from "@mui/material";
import s from '../styles/ProfileListWrapper.module.css'
import {listAPI} from "../API/ListAPI/ListAPI";
import {GetList} from "../store/listReducer";
import {useNavigate} from "react-router-dom";

const MyLists = () => {

    const createdLists = useSelector(getCreatedLists)
    const isAuth = useSelector(getIsAuth)
    const isDarkTheme = useSelector(getIsDarkTheme)
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth)
            dispatch(getCreatedList())
    }, [isAuth, dispatch])

    const [page, setPage] = React.useState(1);
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const goToList = (id:number) => {
        navigate(`/listDetails/${id}`)
    }


    if (isLoading) {
        return (
            <div>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={true}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </div>

        )

    } else {
        return (
            <div>
                <div className={s.myListTitleWrapper}>
                    <Typography variant={'h5'} className={s.myListTitle}>
                        My lists
                        <span className={s.myListResultCount}>
                        {createdLists.total_results}
                    </span>
                    </Typography>
                    <Button sx={{marginLeft:'30px', marginBottom:'10px'}} variant={'contained'}>
                        <Link sx={{color: 'inherit', textDecoration: 'none', }} href={'/newList'}>Create new list</Link>
                    </Button>
                </div>
                <div className={s.listWrapper}>
                    {createdLists.results.map(list => <Card className={s.listItem} key={list.id} variant="outlined" >
                        <CardContent className={isDarkTheme ? s.listItemDark: s.listItemLight}>
                            <Typography onClick={() => goToList(list.id)} className={s.listName} variant="h5" component="div">
                                    {list.name}
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                {list.description || 'No description'}
                            </Typography>
                            <Typography variant="body1">
                                {list.item_count} items
                            </Typography>
                        </CardContent>
                    </Card>)}

                </div>

                {(createdLists?.total_pages && createdLists?.total_pages > 1)
                    ? <Pagination page={page} onChange={handleChangePage} count={createdLists?.total_pages}/>
                    : null}
            </div>
        );
    }

};

export default MyLists;