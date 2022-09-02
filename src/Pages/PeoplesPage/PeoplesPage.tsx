import React, {useEffect} from 'react';
import {getPopularPerson} from "../../store/personReducer";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getPopularPersons} from "../../store/Selectors/personSelectors";
import {Loader} from "../../Common/Components/Loader";
import {useSearchParams} from "react-router-dom";
import {Pagination, Paper} from "@mui/material";
import {PersonCard} from "../SearchResult/Componnents/PersonCard";
import s from './PeoplesPage.module.css'
import Typography from "@mui/material/Typography";

export const PeoplesPage = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()
    const popularPerson = useSelector(getPopularPersons)
    const isLoading = useSelector(getIsLoading)


    useEffect(() => {
        dispatch(getPopularPerson(Number(searchParams.get('page')) || 1))
    }, [dispatch, searchParams])

    const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setSearchParams({page: String(value)});
    };

    if (isLoading) return <Loader/>
    return (
        <div>
            <Typography variant={'h4'} sx={{ml:5}}>
                Popular peoples
            </Typography>
            <Paper elevation={8} className={s.container}>
                {
                    popularPerson.results?.map(person => <PersonCard item={person} key={person.id}/>)
                }
            </Paper>
            <div className={s.paginationWrapper}>
                <Pagination count={popularPerson.total_pages}
                            page={popularPerson.page}
                            onChange={changePage} />
            </div>
        </div>
    );
};

