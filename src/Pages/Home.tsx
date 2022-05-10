import React from "react";
import {createGuestSessionId, deleteSessionId} from "../store/authReducer";
import {useDispatch} from "react-redux";
import {Input, Paper} from "@mui/material";
import {SearchField} from "../components/SearchField";

export const Home = () => {


    return(
        <div>
            <SearchField/>
        </div>
    )
}
