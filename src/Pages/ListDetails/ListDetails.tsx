import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading} from "../../store/Selectors/listSelectors";
import {useParams} from "react-router-dom";
import {GetList} from "../../store/listReducer";
import ListInfo from "./Components/ListInfo";
import ListStats from "./Components/ListStats";
import ListContent from "./Components/ListContent";
import {Loader} from "../../Common/Components/Loader";

export const ListDetails = () => {

    const dispatch = useDispatch()

    let params = useParams();
    const isLoading = useSelector(getIsLoading)


    useEffect(() => {
        dispatch(GetList(Number(params.listId)))
    }, [dispatch, params])


    if (isLoading) return <Loader/>
    return (
        <div>
            <ListInfo/>
            <ListStats/>
            <ListContent/>
        </div>


    );
};
