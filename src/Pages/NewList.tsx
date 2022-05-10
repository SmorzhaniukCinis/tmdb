import React, {useEffect} from 'react';
import {Button, TextField, Typography, ToggleButton, ToggleButtonGroup} from "@mui/material";
import s from '../styles/newList.module.css'
import { useForm, SubmitHandler } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {CreateList, EditList, GetList} from "../store/listReducer";
import {getList} from "../store/Selectors/listSelectors";
import {useNavigate, useParams} from "react-router-dom";

type Inputs = {
    listName: string,
    listDescription: string,
};

export const NewList = () => {


    const [isPublic, setIsPublic] = React.useState<boolean>(true);
    const [title, setTitle] = React.useState<'Create list' | 'Edit list'>('Create list');
    const dispatch = useDispatch()
    const listDescription = useSelector(getList)
    const params = useParams()
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const listData = {
            name: data.listName,
            description: data.listDescription,
            isPublic
        }
        if(params.isEditing) {
            dispatch(EditList(listData, listDescription?.id))
            dispatch(GetList(listDescription?.id))
        } else {
            dispatch(CreateList(listData))
        }

    }

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: boolean,
    ) => {
        setIsPublic(newAlignment);
    };

    useEffect(()=> {
        if(params.isEditing) {
            setTitle('Edit list')
        }
    }, [])


    return (

        <form onSubmit={handleSubmit(onSubmit)} className={s.fieldWrapper}>
            <Typography variant={'h5'} sx={{marginBottom: '10px'}}>
                {title}
            </Typography>
            <TextField
                {...register("listName", {required: true})}
                defaultValue={listDescription?.name}
                sx={{width: '40%', marginBottom: '10px'}}
                id="outlined-basic" label="Name of list"
            />
            <TextField
                {...register("listDescription")}
                defaultValue={listDescription?.description}
                sx={{width: '60%', marginBottom: '10px'}}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
            />
            <div>
                <Typography>
                    Public list?
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={isPublic}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton defaultChecked value={true}>Yas</ToggleButton>
                    <ToggleButton value={false}>No</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <Button type="submit" variant={'outlined'} color={'success'} sx={{marginTop: '20px', width: '150px'}}>
                Save
            </Button>
        </form>
    );
};

