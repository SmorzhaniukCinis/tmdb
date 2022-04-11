import React from 'react';
import {Box, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import s from '../styles/auth.module.css'
import {LoadingButton} from "@mui/lab";
import {authentication} from "../store/authReducer";
import {useDispatch} from "react-redux";

export type formDataType = {
    "username": string,
    "password": string
}

export const Step1 = () => {

    const dispatch = useDispatch()

    const {register, handleSubmit, formState: {errors}} = useForm<formDataType>();
    const onSubmit = handleSubmit(data => {
        dispatch(authentication(data))
    });



    return (
        <Box sx={{ '& button': { m: 3 } }}>
            <form onSubmit={onSubmit}  className={s.form} >
                <div className={s.formItem} >
                    <TextField type='text' className={s.formItem_input} label="Username"
                               variant="outlined" {...register("username", {required: true})} />

                </div>
                <div className={s.formItem}>
                    <TextField type='password' className={s.formItem_input}  label="Password"
                               variant="outlined" {...register("password", {required: true})} />

                </div>

                <LoadingButton type={'submit'} size={'large'} className={s.successButton} loading={false} color='inherit' variant="outlined">
                    Submit
                </LoadingButton>

            </form>
        </Box>

    );
};



















// export const Step1 = () => {
//
//     const dispatch = useDispatch()
//     const token = useSelector(getRequestToken)
//
//
//
//
//     return (
//         <div>
//             <p>fa;lajfl;ajfddjfla</p>
//             <a target={'_blank'} href={
//                 `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/authentication`
//             }>dsa</a>
//         </div>
//     );
// };
