import React, {useEffect} from 'react';
import s from '../styles/PersonPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getMovieDetails} from "../store/personReducer";
import {useParams} from "react-router-dom";
import {getPersonDetails} from "../store/Selectors/personSelectors";
import {getImage} from "../Common/getImage";

export const PersonProfile = () => {

    const dispatch = useDispatch()
    const {personId} = useParams()
    const personDetails = useSelector(getPersonDetails)

    useEffect(() => {
        if (personId) {
            dispatch(getMovieDetails(Number(personId)))
        }
    }, [dispatch])

    return (
        <div className={s.personWrapper}>
            <div>
                <img src={getImage('original', personDetails.profile_path)} alt="profilePhoto"/>
                <div>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </div>
            </div>
            <div>
                <p>{personDetails.biography}</p>
            </div>
        </div>
    );
};

