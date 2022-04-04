import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRequestToken} from "../store/Selectors/authSelectors";

export const Step1 = () => {

    const dispatch = useDispatch()
    const token = useSelector(getRequestToken)




    return (
        <div>
            <p>fa;lajfl;ajfddjfla</p>
            <a target={'_blank'} href={
                `https://www.themoviedb.org/authenticate/${token}`
            }>dsa</a>
        </div>
    );
};
