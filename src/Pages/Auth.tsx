import React, {useEffect, useState} from 'react';
import {Box, Step, StepLabel, Stepper, Typography} from '@mui/material';
import {Step1} from "../components/auth-step1";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoadingForStep1, getRequestToken} from "../store/Selectors/authSelectors";
import {createRequestToken} from "../store/authReducer";

const steps = ['Enter your password and username', "step2"]


const Auth = () => {

    const [activeStep, setActiveStep] = useState(0)


    const nextStep = () => {
      setActiveStep(activeStep+1)
    }

    const dispatch = useDispatch()

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
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {
                (activeStep === 0) ? <Step1 nextStep={nextStep}/>: null
            }

            <Box>
                <button onClick={nextStep}>next</button>
            </Box>
        </Box>
    );
};

export default Auth;