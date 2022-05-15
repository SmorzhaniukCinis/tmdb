import React from 'react';
import {useSelector} from "react-redux";
import {getResults} from "../store/Selectors/searchSelectors";
import {SearchItem} from "./SearchItem";
import {getIsDarkTheme} from "../store/Selectors/accountSelectors";
import noResult from '../assets/no_result_2.webp'
import s from '../styles/homePage.module.css'
import {Paper} from "@mui/material";
import {PersonCard} from "./personCard";

type props = {
    contentType: string
}

export const ContentSwitcher: React.FC<props> = ({contentType}: props) => {

    const searchRes = useSelector(getResults)
    const isDarkTheme = useSelector(getIsDarkTheme)

    switch (contentType) {
        case 'people':
            return <Paper id='resultWrap' elevation={10} className={s.resultWrap}>
                {searchRes?.results.length
                    ? searchRes?.results.map(i => <PersonCard item={i} key={i.id}/>)
                    : <img className={!isDarkTheme ? s.noResultImage : s.noResultImageDark} src={noResult}
                           alt=""/>}
            </Paper>
        case 'tv':
        case 'movie':
            return <Paper id='resultWrap' elevation={10} className={s.resultWrap}>
                {searchRes?.results.length
                    ? searchRes?.results.map(i => <SearchItem item={i} key={i.id}/>)
                    : <img className={!isDarkTheme ? s.noResultImage : s.noResultImageDark} src={noResult}
                    alt=""/>}
            </Paper>
        default:
            return <div>default</div>
    }
};