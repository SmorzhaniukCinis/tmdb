import React from "react";
import {createGuestSessionId, deleteSessionId} from "../store/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {Card, Input, Paper} from "@mui/material";
import {SearchField} from "../components/SearchField";
import {getResults} from "../store/Selectors/searchSelectors";
import {SearchItem} from "../components/SearchItem";
import {Outlet} from "react-router-dom";

export const Home = () => {



    return (
        <div>
            <SearchField/>
            <Outlet/>
            </div>
    )
}
