import React from 'react';
import {Paper} from "@mui/material";
import {SearchItem} from "../components/SearchItem";
import {useSelector} from "react-redux";
import {getResults} from "../store/Selectors/searchSelectors";
import s from '../styles/homePage.module.css'

export const SearchResult = () => {

    const searchRes = useSelector(getResults)


    return (
        <Paper className={s.resultWrap} sx={{m:'20px'}}>
            {searchRes?.results.map(i => <SearchItem item={i} key={i.id}/>)}
        </Paper>

    );
};

