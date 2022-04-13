import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRequestToken} from "../store/Selectors/authSelectors";

export const Step2 = () => {

    const dispatch = useDispatch()
    const token = useSelector(getRequestToken)



    return (
        <div>
            <h4>fdsjka</h4>
            <a href={
                `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/authentication`
            }>dsa</a>
        </div>
    );
};
