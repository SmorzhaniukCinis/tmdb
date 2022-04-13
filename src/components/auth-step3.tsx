import React, {useEffect} from 'react';
import s from '../styles/auth.module.css'
import {useDispatch, useSelector} from "react-redux";
import {createSessionId} from "../store/authReducer";
import loader from '../assets/loader.svg'
import {getIsLoadingForSteps} from "../store/Selectors/authSelectors";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {getIsDarkTheme} from "../store/Selectors/accountSelectors";

export const Step3 = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoadingForSteps)
    const isDarkTheme = useSelector(getIsDarkTheme)


    useEffect(() => {
        dispatch(createSessionId())
    }, [])

    return (
        <div className={s.containerStep3}>
            {isLoading
                ? <img src={loader} alt=""/>
                : <div>
                    <Button size={'large'} variant={'outlined'}>
                        {
                            isDarkTheme
                                ? <Link className={s.darkDoneButtonBox} to={'/home'}>
                                    Done!
                                </Link>
                                : <Link className={s.doneButtonBox} to={'/'}>
                                    Done!
                                </Link>
                        }

                    </Button>
                </div>}
        </div>
    );
};
