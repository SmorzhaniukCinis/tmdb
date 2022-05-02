import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists, getIsLoading} from "../store/Selectors/accountSelectors";
import {getCreatedList} from "../store/accountReducer";
import {getIsAuth} from "../store/Selectors/authSelectors";
import {Backdrop, Card, CardContent, CircularProgress, Typography} from "@mui/material";

const MyLists = () => {

    const createdLists = useSelector(getCreatedLists)
    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        if (isAuth)
        dispatch(getCreatedList())
    }, [isAuth, dispatch])

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
            <div>
                {createdLists.results.map(list => <Card key={list.id} variant="outlined" sx={{ minWidth: 275 , mb: 3}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {list.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {list.description || 'No description'}
                        </Typography>
                        <Typography variant="body1">
                            {list.item_count} items
                        </Typography>
                        <Typography variant="body1">
                            {list.list_type}
                        </Typography>
                    </CardContent>
                </Card>)}
            </div>
        );
    }

};

export default MyLists;