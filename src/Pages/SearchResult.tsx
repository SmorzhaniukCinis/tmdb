import React, {useEffect, useState} from 'react';
import {Button, Pagination, Paper} from "@mui/material";
import {SearchItem} from "../components/SearchItem";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getResults} from "../store/Selectors/searchSelectors";
import s from '../styles/homePage.module.css'
import {getIsDarkTheme} from "../store/Selectors/accountSelectors";
import {useNavigate, useParams} from "react-router-dom";
import {GetMovieSearch, GetPeopleSearch, GetTVShowsSearch} from "../store/searchReducer";
import Loading from "../components/Loading";
import {ContentSwitcher} from "../components/ContentSwitcher";

export type searchQueryParams = {
    query: string | undefined
    page: string
    resType : 'movie' | 'tv' | 'people'
}



export const SearchResult = () => {

    const searchRes = useSelector(getResults)
    const params = useParams<searchQueryParams>()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector(getIsLoading)
    const [currentMedia, setCurrentMedia] = useState<string>('movie')

    useEffect(() => {
        if (params.query) {
            switch (params.resType) {
                case 'movie':
                    dispatch(GetMovieSearch(params.query, Number(params.page)))
                    setPage(Number(params.page))
                    setCurrentMedia('movie')
                    break
                case 'tv':
                    dispatch(GetTVShowsSearch(params.query, Number(params.page)))
                    setPage(Number(params.page))
                    setCurrentMedia('tv')
                    break
                case 'people':
                    dispatch(GetPeopleSearch(params.query, Number(params.page)))
                    setPage(Number(params.page))
                    setCurrentMedia('people')
                    break
            }

        }
    }, [dispatch, params.page , params.resType, params.query])

    const changeMediaType = (e:React.MouseEvent<HTMLButtonElement> ) => {
        setCurrentMedia(e.currentTarget.name)
        navigate(`/result/${e.currentTarget.name}/search=${params.query}/page=1`)
    }


    ///////pagination//////
    const [page, setPage] = React.useState(1);
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        navigate(`/result/${params.resType}/search=${params.query}/page=${value}`)
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
                <div className={s.searchNavigation}>
                    <Button  name={'movie'} disabled={currentMedia === 'movie'} onClick={changeMediaType}>
                        Movie
                    </Button>
                    <Button name={'tv'} disabled={currentMedia === 'tv'} onClick={changeMediaType}>
                        tv shows
                    </Button>
                    <Button name={'people'} disabled={currentMedia === 'people'} onClick={changeMediaType}>
                        people
                    </Button>
                </div>
                    <ContentSwitcher contentType={currentMedia}/>
                {
                    searchRes?.total_pages > 1
                        ? <Pagination page={page} onChange={handleChangePage} count={searchRes?.total_pages}/>
                        : null

                }
            </div>


        )
    }
};

