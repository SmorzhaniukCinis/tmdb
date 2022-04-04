import React, {useEffect, useState} from 'react';
import {StepLabel} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {createRequestToken} from "../store/authReducer";
import {getIsLoadingForStep1} from "../store/Selectors/authSelectors";
import LoadingButton from '@mui/lab/LoadingButton';

export const Step1 = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoadingForStep1)

    useEffect(()=>{
        dispatch(createRequestToken())
    }, [])

    return (
        <div>

            <div>
asd
            </div>
        </div>
    );
};
