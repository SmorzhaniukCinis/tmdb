import React from 'react';
import {Button, TextField, Typography, ToggleButton, ToggleButtonGroup} from "@mui/material";
import s from '../styles/newList.module.css'
import { useForm, SubmitHandler } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {CreateList, EditList, GetList} from "../store/listReducer";
import {getList} from "../store/Selectors/listSelectors";
import {useParams} from "react-router-dom";

type Inputs = {
    listName: string,
    listDescription: string,
};

const NewListStep1 = () => {


    const [isPublic, setIsPublic] = React.useState<boolean>(true);
    const dispatch = useDispatch()
    const listDescription = useSelector(getList)
    const params = useParams()

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
console.log(listDescription?.name)


    return (

        <form onSubmit={handleSubmit(onSubmit)} className={s.step1Wrapper}>
            <TextField
                {...register("listName", {required: true})}
                defaultValue={listDescription?.name}
                sx={{width: '100%', marginBottom: '10px'}}
                id="outlined-basic" label="Name of list"
            />
            <TextField
                {...register("listDescription")}
                defaultValue={listDescription?.description}
                sx={{width: '150%', marginBottom: '10px'}}
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
            <Button type="submit" variant={'outlined'} sx={{marginTop: '20px'}}>
                Next step
            </Button>
        </form>
    );
};

export default NewListStep1;