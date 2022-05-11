import React from "react";
import {SearchField} from "../components/SearchField";
import {Outlet} from "react-router-dom";

export const Home = () => {


    return (
        <div>
            <SearchField/>
            <Outlet/>
        </div>
    )
}
