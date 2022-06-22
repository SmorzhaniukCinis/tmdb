import React, {useEffect} from 'react';
import s from '../styles/PersonPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getMovieDetails} from "../store/personReducer";
import {useParams} from "react-router-dom";
import {getIsLoading, getPersonDetails} from "../store/Selectors/personSelectors";
import {getImage} from "../Common/getImage";
import {Box, CircularProgress, Typography} from "@mui/material";
import {getGender} from "../Common/getGender";
import moment from "moment";
import {Loader} from "../Common/Loader";
import PersonCommonInfo from "../components/PersonCommonInfo";

export const PersonProfile = () => {

    const dispatch = useDispatch()
    const {personId} = useParams()
    const personDetails = useSelector(getPersonDetails)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        if (personId) {
            dispatch(getMovieDetails(Number(personId)))
        }
    }, [dispatch])


    if (isLoading) {
        return <Loader/>
    }
    return (
        <div className={s.personWrapper}>
            <PersonCommonInfo personDetails={personDetails}/>
            <div>
                <h5 className={s.name}>{personDetails.name}</h5>
                <h6 className={s.title}>Biography</h6>
                <p className={s.biography}>{personDetails.biography}</p>
            </div>
        </div>
    );
};

