import React from 'react';
import {getCreatedList} from "../store/accountReducer";
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists, getDetails} from "../store/Selectors/accountSelectors";
import {Button} from "@mui/material";
import {getImage} from "../Common/getImage";
import s from '../styles/Profile.module.css'

const Profile = () => {
    const dispatch = useDispatch()

    const details = useSelector(getDetails)

    const profileImage = getImage('w200', details.avatar.tmdb.avatar_path)

    return (
        <div className={s.profileContainer}>
            <div>
                <img className={s.profilePhoto} src={profileImage} alt=""/>
            </div>
            <span className={s.userName}>
                {details.name}
            </span>
        </div>
    );
};

export default Profile;