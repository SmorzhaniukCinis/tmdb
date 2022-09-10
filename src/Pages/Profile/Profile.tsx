import React from 'react';
import {useSelector} from "react-redux";
import {getDetails} from "../../store/Selectors/accountSelectors";
import {getImage} from "../../Common/functions/getImage";
import s from './Profile.module.css'
import {ProfileLinks} from "./Components/ProfileLinks";

const Profile = () => {

    const details = useSelector(getDetails)

    const profileImage = getImage('w200', details.avatar.tmdb.avatar_path)

    return (
        <div>
            <div className={s.profileContainer}>
                <img className={s.profilePhoto} src={profileImage} alt="profilePhoto"/>
                <span className={s.userName}>
                    {details.name}
                </span>
            </div>
            <ProfileLinks/>
        </div>
    );
};

export default Profile;