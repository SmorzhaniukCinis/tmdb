import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
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
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (params.isEditing && params.listId) {
            dispatch(GetList(Number(params.listId)))
        }
    }, [params, dispatch])

    useEffect(()=> {
        if (location.pathname === '/newList/step2') {
            setActiveStep(2)
        }
    },[location])


    const stepHandler = (step: number) => {
        setActiveStep(step)
        switch (step) {
            case 1:
                navigate('/newList')
                break
            case 2:
                navigate('/newList/step2')
                break
            case 3:
                navigate('/newList/step3')
                break
        }
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
                        <ListItem disabled={activeStep > 1} sx={activeStep === 1 ? {color: 'blueviolet'} : null} button
                                  onClick={() => stepHandler(1)}>
                            <ListItemText primary="Step 1: List Details"/>
                        </ListItem>
                        <Divider/>
                        <ListItem disabled={location.pathname === '/newList'}
                                  sx={activeStep === 2 ? {color: 'blueviolet'} : null} button divider
                                  onClick={() => stepHandler(2)}>
                            <ListItemText primary="Step 2: Add Items"/>
                        </ListItem>
                        <ListItem disabled={location.pathname === '/newList'}
                                  sx={activeStep === 3 ? {color: 'blueviolet'} : null} button
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