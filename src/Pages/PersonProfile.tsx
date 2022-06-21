import React, {useEffect} from 'react';
import s from '../styles/PersonPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getMovieDetails} from "../store/personReducer";
import {useParams} from "react-router-dom";
import {getPersonDetails} from "../store/Selectors/personSelectors";
import {getImage} from "../Common/getImage";
import {Typography} from "@mui/material";
import {getGender} from "../Common/getGender";

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
                <img className={s.profileImage} src={getImage('original', personDetails.profile_path)}
                     alt="profilePhoto"/>
                <div>
                    <h6 className={s.title}>Personal info</h6>
                    <div>
                        <span className={s.subTitle}>Know For</span>
                        <span className={s.CommonInfo}>
                            {personDetails.known_for_department}
                        </span>
                    </div>
                    <div>
                        <span className={s.subTitle}>Know Credits</span>
                        <span className={s.CommonInfo}>
                            {personDetails.combined_credits.cast.length + personDetails.combined_credits.crew.length}
                        </span>
                    </div>
                    <div>
                        <span className={s.subTitle}>Gender</span>
                        <span className={s.CommonInfo}>
                            {getGender(personDetails.gender)}
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <h5 className={s.name}>{personDetails.name}</h5>
                <h6 className={s.title}>Biography</h6>
                <p className={s.biography}>{personDetails.biography}</p>
            </div>
        </div>
    );
};

