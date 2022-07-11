import React, {useEffect} from 'react';
import s from './PersonPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPersonDetails} from "../../store/personReducer";
import {useParams} from "react-router-dom";
import {getIsLoading, getPersonDetailsSelector} from "../../store/Selectors/personSelectors";
import {Loader} from "../../Common/Components/Loader";
import PersonCommonInfo from "./Components/PersonCommonInfo";
import {PersonProfessionInfo} from "./Components/PersonProfessionInfo";

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


    if (isLoading) return <Loader/>

    return (
        <div className={s.personWrapper}>
            <PersonCommonInfo personDetails={personDetails}/>
            <PersonProfessionInfo personDetails={personDetails}/>
        </div>
    );
};

