import React, {useEffect, useState} from 'react';
import {Box, Step, StepLabel, Stepper} from '@mui/material';
import {StepContainer} from "./Components/StepContainer";
import {authActions} from "../../store/authReducer";
import {useDispatch} from "react-redux";

const steps = ['Enter your password and username', "Give your permission", 'Done!']


const Auth = () => {

    let [activeStep, setActiveStep] = useState(0)
    const dispatch = useDispatch()


    const nextStep = () => {
        setActiveStep(activeStep + 1)
    }

    useEffect(() => {
        const url = new URL(window.location.href)
        let approved = url.searchParams.get('approved')
        let request_token = url.searchParams.get('request_token')
        if (approved && request_token) {
            setActiveStep(2)
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
            <StepContainer  activeStep={activeStep} nextStep={nextStep}/>
        </Box>
    );
};

export default Auth;