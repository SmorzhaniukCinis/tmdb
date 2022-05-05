import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading} from "../store/Selectors/listSelectors";
import {useParams} from "react-router-dom";
import {GetList} from "../store/listReducer";
import Loading from "../components/Loading";
import ListInfo from "../components/listInfo";
import ListStats from "../components/listStats";
import ListContent from "../components/listContent";

export const ListDetails = () => {

    const dispatch = useDispatch()

    let params = useParams();
    const isLoading = useSelector(getIsLoading)


    useEffect(() => {
        dispatch(GetList(Number(params.listId)))
    }, [dispatch, params])


    if (isLoading) {
        return <Loading/>
    } else {
        return (
            <div>
                <ListInfo/>
                <ListStats/>
                <ListContent/>
            </div>


        );
    }
};
