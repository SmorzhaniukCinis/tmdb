import React, {useEffect} from 'react';
import s from '../styles/PersonPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPersonDetails} from "../store/personReducer";
import {useParams} from "react-router-dom";
import {getIsLoading, getPersonDetailsSelector} from "../store/Selectors/personSelectors";
import {getImage} from "../Common/getImage";
import {Box, CircularProgress, Typography} from "@mui/material";
import {getGender} from "../Common/getGender";
import moment from "moment";
import {Loader} from "../Common/Loader";
import PersonCommonInfo from "../components/PersonCommonInfo";
import {PersonProfessionInfo} from "../components/PersonProfessionInfo";

export const PersonProfile = () => {

    const dispatch = useDispatch()
    const {personId} = useParams()
    const personDetails = useSelector(getPersonDetailsSelector)
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
        <div className={s.personWrapper}>
            <PersonCommonInfo personDetails={personDetails}/>
            <PersonProfessionInfo personDetails={personDetails}/>
        </div>
    );
};

