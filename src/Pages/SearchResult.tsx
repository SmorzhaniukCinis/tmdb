import React, {useEffect} from 'react';
import {Pagination, Paper, Typography} from "@mui/material";
import {SearchItem} from "../components/SearchItem";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getResults} from "../store/Selectors/searchSelectors";
import s from '../styles/homePage.module.css'
import noResult from '../assets/no_result_2.webp'
import {getIsDarkTheme} from "../store/Selectors/accountSelectors";
import {useNavigate, useParams} from "react-router-dom";
import {GetMovieSearch} from "../store/searchReducer";
import Loading from "../components/Loading";

export const SearchResult = () => {

    const searchRes = useSelector(getResults)
    const isDarkTheme = useSelector(getIsDarkTheme)
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector(getIsLoading)

    useEffect(()=> {
        if(params.query) {
            switch (params.resType) {
                case 'movie':
                    dispatch(GetMovieSearch(params.query, Number(params.page)))
                    setPage(Number(params.page))
                    break
            }

        }},[dispatch, params])


    ///////pagination//////
    const [page, setPage] = React.useState(1);
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        navigate(`/result/movie/search=${params.query}/page=${value}`)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };
    ///////////
    if (isLoading) {
        return <Loading/>

    } else {
    return (
        <div>
            <Paper id='resultWrap' elevation={10} className={s.resultWrap}>
                {
                    searchRes?.results.length
                        ? searchRes?.results.map(i => <SearchItem item={i} key={i.id}/>)
                        : <img className={!isDarkTheme ? s.noResultImage : s.noResultImageDark} src={noResult} alt=""/>
                }

            </Paper>
            {
                searchRes?.total_pages > 1
                    ? <Pagination page={page} onChange={handleChangePage} count={searchRes?.total_pages}/>
                    : null

            }
        </div>


    )}
};

