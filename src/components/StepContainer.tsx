import React from 'react';
import {Step1} from "./auth-step1";
import {Step2} from "./auth-step2";

type props = {
    activeStep: number
    nextStep: ()=> void
}

export const StepContainer = ({activeStep, nextStep}:props) => {
    switch (activeStep) {
        case 0:
            return <Step1 nextStep={nextStep}/>
        case 1:
            return <Step2/>
        case 3:
            return <div>step3</div>
        default:
            return null
    }
}

