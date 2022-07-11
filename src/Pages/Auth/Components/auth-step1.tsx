import React, {useEffect} from 'react';
import {Box, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import s from '../auth.module.css'
import {LoadingButton} from "@mui/lab";
import {authentication, createRequestToken} from "../../../store/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {getErrorMessage, getIsAuth, getIsLoadingForSteps} from "../../../store/Selectors/authSelectors";
import errorIcon from '../../../assets/errorIcon.png'

export type formDataType = {
    "username": string,
    "password": string
}
type props = {
    nextStep: () => void
}
export const Step1 = ({nextStep}: props) => {

    const dispatch = useDispatch()

    const isLoading = useSelector(getIsLoadingForSteps)
    const isAuth = useSelector(getIsAuth)
    const errorMessage = useSelector(getErrorMessage)

    const {register, handleSubmit, formState: {errors}} = useForm<formDataType>();
    const onSubmit = handleSubmit(data => {
        dispatch(createRequestToken())
        dispatch(authentication(data))
    });

    useEffect(() => {
        if (isAuth) {
            nextStep()
        }
    }, [isAuth])


    return (
        <Box sx={{'& button': {m: 3}}}>
            <form onSubmit={onSubmit} className={s.form}>
                <div className={s.errorMessage}>
                    {errorMessage
                        ?<div>
                            <img className={s.errorImage} src={errorIcon} alt=""/>
                            <span>{errorMessage}</span>
                        </div>
                        : null}
                </div>
                <div className={s.formItem}>
                    <TextField type='text' className={s.formItem_input} label="Username"
                               variant="outlined" {...register("username", {required: true})} />

                </div>
                <div className={s.formItem}>
                    <TextField type='password' className={s.formItem_input} label="Password"
                               variant="outlined" {...register("password", {required: true})} />

                </div>

                <LoadingButton type={'submit'} size={'large'} className={s.successButton} loading={isLoading}
                               color='inherit' variant="outlined">
                    Submit
                </LoadingButton>

            </form>
        </Box>

    );
};


