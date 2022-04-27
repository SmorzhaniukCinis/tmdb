import React from 'react';
import {getCreatedList} from "../store/accountReducer";
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists, getDetails} from "../store/Selectors/accountSelectors";
import {Button} from "@mui/material";

const Profile = () => {
    const dispatch = useDispatch()

    const details = useSelector(getDetails)
    const createdLists = useSelector(getCreatedLists)
    console.log(createdLists)

    return (
        <div>
            <Button variant={'outlined'} onClick={()=> {
                dispatch(getCreatedList())
            }}>getCreatedList</Button>
        </div>
    );
};

export default Profile;