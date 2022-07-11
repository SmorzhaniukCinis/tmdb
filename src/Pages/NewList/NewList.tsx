import React, {useEffect} from 'react';
import {Button, TextField, Typography, ToggleButton, ToggleButtonGroup} from "@mui/material";
import s from './newList.module.css'
import {useForm, SubmitHandler} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {CreateList, EditList, GetList} from "../../store/listReducer";
import {getList} from "../../store/Selectors/listSelectors";
import {useNavigate, useParams} from "react-router-dom";
import {getCreatedList} from "../../store/accountReducer";

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

    const {register, handleSubmit, reset } = useForm<Inputs>({defaultValues: {
            listName: listDescription?.name,
            listDescription: listDescription?.description || ''
        }});

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const listData = {
            name: data.listName,
            description: data.listDescription,
            isPublic
        }
        if (params.isEditing) {
            dispatch(EditList(listData, listDescription?.id))
            navigate(`/listDetails/${listDescription?.id}`)
        } else {
            dispatch(CreateList(listData))
            dispatch(getCreatedList())
            navigate('/myLists')
        }

    }

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: boolean,
    ) => {
        setIsPublic(newAlignment);
    };

    useEffect(() => {
        if (params.isEditing && params.listId) {
            dispatch(GetList(Number(params.listId)))
            setTitle('Edit list')
        }
    }, [dispatch, params.isEditing , params.listId])

    useEffect(()=>{
            reset({
                listName: listDescription?.name,
                listDescription: listDescription?.description || ''
            })
    },[listDescription, reset])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.fieldWrapper}>
            <Typography variant={'h5'} sx={{marginBottom: '10px'}}>
                {title}
            </Typography>
            <TextField
                variant="outlined"
                {...register("listName", {required: true})}
                sx={{width: '40%', marginBottom: '10px'}}
                label="Name of list"
                focused
            />
            <TextField
                variant="outlined"
                {...register("listDescription")}
                sx={{width: '60%', marginBottom: '10px'}}
                label="Description"
                multiline
                rows={4}
                focused
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

