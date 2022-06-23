import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getPersonDetailsSelector} from "../store/Selectors/personSelectors";
import {Button, Paper, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {Loader} from "../Common/Loader";
import {getPersonDetails} from "../store/personReducer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import s from '../styles/PersonPage.module.css'

export const PersonPhotos = () => {

    const {tagged_images, name} = useSelector(getPersonDetailsSelector)
    const dispatch = useDispatch()
    const {personId} = useParams()
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        if (personId) {
            dispatch(getPersonDetails(Number(personId)))
        }
    }, [dispatch, personId])


    if (isLoading) {
        return <Loader/>
    }
    return (
        <Paper elevation={5}>
            <div className={s.backToProfileWrapper}>
                <Typography variant={'h4'} sx={{fontWeight: 'bold', pt:3, pl:3}}>
                    {name}
                </Typography>
                <Button>
                    <ArrowBackIcon fontSize={'small'}/>
                    <span className={s.backToProfileButton}>back to person profile</span>
                </Button>
            </div>
            <div className={s.photosWrapper}>
                {tagged_images?.results.map(image => <span>{image.image_type}</span>)}
            </div>
        </Paper>
    );
};