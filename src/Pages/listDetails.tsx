import React, {useEffect, useState} from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Paper, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getList} from "../store/Selectors/listSelectors";
import {useParams} from "react-router-dom";
import {GetList} from "../store/listReducer";
import s from '../styles/ListDescription.module.css'
import {getImage} from "../Common/getImage";
import Loading from "../components/Loading";
import {getIsDarkTheme} from "../store/Selectors/accountSelectors";

export const ListDetails = () => {

    const dispatch = useDispatch()
    const listDetails = useSelector(getList)
    let params = useParams();
    const isLoading = useSelector(getIsLoading)
    const isDarkTheme = useSelector(getIsDarkTheme)

    useEffect(() => {
        dispatch(GetList(Number(params.listId)))
    }, [])


    if (isLoading) {
        return <Loading/>
    } else {
        return (
            <div>
                <Paper elevation={7}>
                    <div style={{
                        background: `url(${getImage('original', listDetails?.backdrop_path)}) no-repeat center`,
                        backgroundSize: '100%',
                        borderRadius: "5px"
                    }}>
                        <div className={isDarkTheme ? s.darkBackground : s.lightBackground}>
                            <Typography sx={{fontSize: '35px'}} variant='h5'>
                                {listDetails?.name}
                            </Typography>
                            <Typography sx={{fontSize: '16px', mt: '15px'}}>
                                A list created by <br/>
                            </Typography>
                            <Typography sx={{fontSize: '20px'}}>
                                {listDetails?.created_by.name}
                            </Typography>
                            <Typography sx={{fontSize: '20px', mt: '15px'}}>
                                About this list
                            </Typography>
                            <Typography sx={{fontSize: '15px', opacity: '90%'}}>
                                {listDetails?.description ? listDetails?.description : 'No description'}
                            </Typography>
                        </div>
                    </div>
                </Paper>
                <Paper elevation={7} className={s.statisticBlock}>
                    <Box>
                        <p className={s.statisticValue}>{listDetails?.total_results}</p>
                        <p className={s.statisticDescription}>Items on this list</p>
                    </Box>
                    <Box>
                        <p className={s.statisticValue}>{listDetails?.average_rating}</p>
                        <p className={s.statisticDescription}>Average rating</p>
                    </Box>
                    <Box>
                        <p className={s.statisticValue}>{listDetails?.runtime}</p>
                        <p className={s.statisticDescription}>Total runtime</p>
                    </Box>
                    <Box>
                        <p className={s.statisticValue}>{listDetails?.revenue}</p>
                        <p className={s.statisticDescription}>Total revenue</p>
                    </Box>
                </Paper>
                <Paper elevation={7} className={s.ItemsBlock}>
                    {listDetails?.results.map(item =>
                        <Card key={item.id} sx={{maxWidth: 290, m: '10px'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image={getImage('w300', item.poster_path)}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{minHeight: '60px', fontSize:'20px'}} gutterBottom variant="h5" component="div">
                                        {item.name || item.title}
                                    </Typography>
                                    <Typography>
                                        Comment:
                                    </Typography>
                                    <Box sx={{
                                        borderRadius: '7px',
                                        backgroundColor: 'divider',
                                        p: '5px'
                                    }}>
                                        <Typography variant="body2" color="text.secondary">
                                            {listDetails?.comments[`movie:${item.id}`]
                                            || listDetails?.comments[`tv:${item.id}`]
                                            || 'no comment'}
                                        </Typography>
                                    </Box>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )}

                </Paper>
            </div>


        );
    }
};
