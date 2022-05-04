import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "../store/Selectors/listSelectors";
import {useParams} from "react-router-dom";
import {GetList} from "../store/listReducer";

export const ListDetails = () => {

    const dispatch = useDispatch()
    const listDetails = useSelector(getList)
    let params = useParams();

    useEffect(() => {
        dispatch(GetList(Number(params.listId)))
    }, [])


    return (
        <Box>
            <Typography>
                {listDetails?.name}
                test
            </Typography>
        </Box>
    );
};
