import React, {useEffect, useState} from 'react';
import {Box, Step, StepLabel, Stepper} from '@mui/material';
import {StepContainer} from "../components/StepContainer";
import {authActions} from "../store/authReducer";
import {useDispatch} from "react-redux";

const steps = ['Enter your password and username', "step2", 'step3']


const Auth = () => {

    const [activeStep, setActiveStep] = useState(0)
    const dispatch = useDispatch()


    const nextStep = () => {
        setActiveStep(activeStep + 1)
    }
    useEffect(() => {
        const url = new URL(window.location.href)
        let approved = url.searchParams.get('approved')
        let request_token = url.searchParams.get('request_token')
        if (approved && request_token) {
            setActiveStep(3)
            dispatch(authActions.setRequestToken(request_token))
        }
    }, [])

    return (
        <Box>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => {
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
            <StepContainer activeStep={activeStep} nextStep={nextStep}/>
            <Box>
                <button onClick={nextStep}>next</button>
            </Box>
        </Box>
    );
};

export default Auth;