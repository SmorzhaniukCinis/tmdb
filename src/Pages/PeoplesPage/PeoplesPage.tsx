import React, {useEffect} from 'react';
import {getPopularPerson} from "../../store/personReducer";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getPopularPersons} from "../../store/Selectors/personSelectors";
import {Loader} from "../../Common/Components/Loader";
import {useSearchParams} from "react-router-dom";

export const PeoplesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const popularPerson = useSelector(getPopularPersons)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        dispatch(getPopularPerson())
        },[dispatch])

    console.log(popularPerson)

    if(isLoading) return <Loader/>
    return (
        <div>
            <button onClick={()=>setSearchParams({page: '1'})}></button>
        </div>
    );
};

