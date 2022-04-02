import {useDispatch, useSelector} from "react-redux";
import {authentication, createRequestTokenThunk} from "../store/authReducer";
import {getAccountInfo} from "../store/accountReducer";
import React from "react";
import App from "../App";

export const Home = () => {

    const dispatch = useDispatch()
    const redux = () => {
        dispatch(createRequestTokenThunk())
    }
    const state = useSelector((state) => state )
    console.log(state)
    function getUser() {
        dispatch(getAccountInfo())
    }

    const tryAuth = () => {
        const url = new URL(window.location.href)
        let approved =  url.searchParams.get('approved')
        let request_token = url.searchParams.get('request_token')
        if(approved && request_token != null) {
            dispatch(authentication(request_token))        }
    }
    return(
        <div>
            <button onClick={redux}>redux</button>
            <button onClick={getUser}>getUser</button>
            <button onClick={tryAuth}>auth</button>
        </div>
    )
}
