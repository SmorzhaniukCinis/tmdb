import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {Backdrop, Card, CircularProgress, Divider, List, ListItem, ListItemText} from "@mui/material";
import s from '../styles/newList.module.css'
import {GetList} from "../store/listReducer";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading} from "../store/Selectors/listSelectors";

const style = {
    width: '100%',
    maxWidth: 360,
};

const NewList = () => {


    const [activeStep, setActiveStep] = useState(1)
    const params = useParams()
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        if (params.isEditing && params.listId) {
            dispatch(GetList(Number(params.listId)))
        }
    }, [])

    const stepHandler = (step: number) => {
        setActiveStep(step)
    }

    if (isLoading) {
        return (
            <div>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={true}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </div>

        )

    } else {
        return (
            <div className={s.mainWrapper}>
                <Card variant={'outlined'} sx={{width: '240px', height: '165px'}}>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem sx={activeStep === 1 ? {color: 'blueviolet'} : null} button
                                  onClick={() => stepHandler(1)}>
                            <ListItemText primary="Step 1: List Details"/>
                        </ListItem>
                        <Divider/>
                        <ListItem sx={activeStep === 2 ? {color: 'blueviolet'} : null} button divider
                                  onClick={() => stepHandler(2)}>
                            <ListItemText primary="Step 2: Add Items"/>
                        </ListItem>
                        <ListItem sx={activeStep === 3 ? {color: 'blueviolet'} : null} button
                                  onClick={() => stepHandler(3)}>
                            <ListItemText primary="Step 3: Choose Image"/>
                        </ListItem>
                    </List>
                </Card>
                <main>
                    <Outlet/>
                </main>
            </div>
        )
    }
};

export default NewList;