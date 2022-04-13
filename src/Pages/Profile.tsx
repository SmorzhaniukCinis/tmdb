import React, {useEffect} from 'react';
import {accountActions, getAccountInfo} from "../store/accountReducer";
import {useDispatch, useSelector} from "react-redux";
import {getUserDetails} from "../store/Selectors/accountSelectors";
import {getSessionId} from "../store/Selectors/authSelectors";

const Profile = () => {
    const dispatch = useDispatch()
    const sessionId = useSelector(getSessionId)
    useEffect(() => {
        if(sessionId)
        dispatch(getAccountInfo())
    },[sessionId])
    const details = useSelector(getUserDetails)
console.log(details)
    return (
        <div>
            profile
            {
                details.name
            }
        </div>
    );
};

export default Profile;