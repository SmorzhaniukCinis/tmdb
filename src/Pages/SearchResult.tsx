import React from 'react';
import {Paper, Typography} from "@mui/material";
import {SearchItem} from "../components/SearchItem";
import {useSelector} from "react-redux";
import {getResults} from "../store/Selectors/searchSelectors";
import s from '../styles/homePage.module.css'
import noResult from '../assets/no_result_2.webp'
import {getIsDarkTheme} from "../store/Selectors/accountSelectors";

export const SearchResult = () => {

    const searchRes = useSelector(getResults)
    const isDarkTheme = useSelector(getIsDarkTheme)


    return (


        <Paper className={s.resultWrap} >
            {searchRes?.results.length
                ? searchRes?.results.map(i => <SearchItem item={i} key={i.id}/>)
                : <img className={!isDarkTheme ?s.noResultImage :s.noResultImageDark} src={noResult} alt=""/>
            }
        </Paper>

    );
};

