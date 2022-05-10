import React from 'react';
import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {SubmitHandler, useForm} from "react-hook-form";
import {GetMultiSearch} from "../store/searchReducer";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

type Inputs = {
    searchField: string,
};

export const SearchField = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(GetMultiSearch(data.searchField))
        navigate('result')
    };


    return (
        <Paper
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={{p: '2px 4px', display: 'flex', width: '80%', ml: '10%'}}
        >
            <InputBase
                {...register("searchField")}
                sx={{ml: 1, flex: 1}}
                placeholder="Search"
            />
            <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
};

