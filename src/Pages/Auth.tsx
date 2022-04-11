import React, {useEffect, useState} from 'react';
import {Box, Step, StepContent, StepLabel, Stepper} from '@mui/material';
import {Step1} from "../components/auth-step1";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoadingForStep1, getRequestToken} from "../store/Selectors/authSelectors";
import {createRequestToken, createSessionId} from "../store/authReducer";
import loader from '../assets/loader.svg'

const Auth = () => {

    const [activeStep, setActiveStep] = useState(0)


    const nexStep = () => {
      setActiveStep(activeStep+1)
    }

    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoadingForStep1)
    const token = useSelector(getRequestToken)

    useEffect(()=>{
        dispatch(createRequestToken())
    }, [])

    useEffect(() => {
        const url = new URL(window.location.href)
        let approved = url.searchParams.get('approved')
        let request_token = url.searchParams.get('request_token')
        if (approved && request_token != null) {
            // dispatch(createSessionId(request_token))
        }
    }, [])

    return (
        <Box>
            <Stepper activeStep={activeStep}>
                <Step >
                    <StepLabel>Step 1</StepLabel>
                </Step>
                <Step >
                    <StepLabel>Step 2</StepLabel>
                </Step>
            </Stepper>

            {
                (activeStep === 0) ? <Step1/>: null
            }

            <Box>
                <button onClick={nexStep}>next</button>
            </Box>
        </Box>
    );
};

export default Auth;