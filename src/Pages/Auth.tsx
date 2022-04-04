import React, {useEffect, useState} from 'react';
import {Box, Step, StepLabel, Stepper} from '@mui/material';
import {Step1} from "../components/auth-step1";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoadingForStep1} from "../store/Selectors/authSelectors";
import {createRequestToken} from "../store/authReducer";
import loader from '../assets/loader.svg'

const Auth = () => {

    const [activeStep, setActiveStep] = useState(0)


    const nexStep = () => {
      setActiveStep(activeStep+1)
    }

    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoadingForStep1)

    useEffect(()=>{
        dispatch(createRequestToken())
        console.log('ds')
    }, [])

    return (
        <Box>
            <Stepper activeStep={activeStep}>
                <Step >
                    <StepLabel>Step 1</StepLabel>
                    {!isLoading ? <div>{loader}</div> : <Step1/>}
                </Step>
                <Step >
                    <StepLabel>Step 2</StepLabel>
                    <div>
                        <img src='https://loading.io/asset/562314' alt=""/>
                    </div>
                </Step>
            </Stepper>
            <Box>
                <button onClick={nexStep}>next</button>
            </Box>
        </Box>
    );
};

export default Auth;