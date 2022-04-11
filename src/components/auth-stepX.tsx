import React, {useEffect} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import s from '../styles/auth.module.css'
import {LoadingButton} from "@mui/lab";
import {useDispatch} from "react-redux";
import {authentication, createRequestToken, createSessionId} from "../store/authReducer";

type formData = {
    "username": string,
    "password": string
}

export const AuthStepX = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<formData>();
    const onSubmit = handleSubmit(data => {
        console.log(data)
    });



    return (
        <Box sx={{ '& button': { m: 3 } }}>
            <form onSubmit={onSubmit}  className={s.form} >
                <div className={s.formItem} >
                    <TextField type='text' className={s.formItem_input} id="outlined-basic" label="Username"
                               variant="outlined" {...register("username", {required: true})} />

                </div>
                <div className={s.formItem}>
                    <TextField type='password' className={s.formItem_input}  id="outlined-basic" label="Password"
                               variant="outlined" {...register("password", {required: true})} />

                </div>

                <LoadingButton type={'submit'} size={'large'} className={s.successButton} loading={false} color='inherit' variant="outlined">
                    Submit
                </LoadingButton>

            </form>
        </Box>

    );
};
