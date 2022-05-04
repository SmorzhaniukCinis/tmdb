import React, {useEffect, useState} from 'react';
import {Box, Paper, Typography} from "@mui/material";
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
    console.log(listDetails)

    if (isLoading) {
        return <Loading/>
    } else {
        return (
            <div>
                <Paper elevation={7}>
                    <div style={{
                        background: `url(${getImage('original', listDetails?.backdrop_path)}) no-repeat center`,
                        backgroundSize: '100%',
                        borderRadius:"5px"
                    }}>
                        <div className={isDarkTheme ? s.darkBackground : s.ligtBackground}>
                            <Typography sx={{fontSize: '35px'}} variant='h5'>
                                {listDetails?.name}
                            </Typography>
                            <Typography sx={{fontSize: '16px', mt: '15px'}} >
                                A list created by <br/>
                            </Typography>
                            <Typography sx={{fontSize: '20px'}}>
                                {listDetails?.created_by.name}
                            </Typography>
                            <Typography sx={{fontSize: '20px', mt: '15px'}}>
                                About this list
                            </Typography>
                            <Typography sx={{fontSize: '15px', opacity: '90%'}}>
                                {listDetails?.description ?listDetails?.description : 'No description'}
                            </Typography>
                        </div>
                    </div>
                </Paper>
                <Paper elevation={7} className={s.statisticBlock}>
                    rt
                </Paper>
            </div>



        );
    }
};
