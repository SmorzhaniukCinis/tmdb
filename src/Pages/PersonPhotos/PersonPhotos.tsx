import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getPersonDetailsSelector} from "../../store/Selectors/personSelectors";
import {Button, Paper, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {Loader} from "../../Common/Components/Loader";
import {getPersonDetails} from "../../store/personReducer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import s from '../PersonProfile/PersonPage.module.css'
import {PersonImageList} from "./Components/PersonImageList";

export const PersonPhotos = () => {

    const {images, name, id} = useSelector(getPersonDetailsSelector)
    const dispatch = useDispatch()
    const {personId} = useParams()
    const isLoading = useSelector(getIsLoading)
    const navigate = useNavigate()

    useEffect(() => {
        if (personId) {
            dispatch(getPersonDetails(Number(personId)))
        }
    }, [dispatch, personId])


    if (isLoading) return <Loader/>

    return (
        <Paper elevation={5}>
            <div className={s.backToProfileWrapper}>
                <Typography variant={'h4'} sx={{fontWeight: 'bold', pt:3, pl:3}}>
                    {name}
                </Typography>
                <Button onClick={()=>navigate(`/person/${id}`)}>
                    <ArrowBackIcon fontSize={'small'}/>
                    <span className={s.backToProfileButton}>back to person profile</span>
                </Button>
            </div>
            <div className={s.photosWrapper}>
                <PersonImageList images={images?.profiles}/>
            </div>
        </Paper>
    );
};