import {useDispatch, useSelector} from "react-redux";
import {createRequestToken} from "../store/authReducer";
import {getAccountInfo} from "../store/accountReducer";
import React from "react";

export const Home = () => {

    const dispatch = useDispatch()
    const redux = () => {
        dispatch(createRequestToken())
    }
    const state = useSelector((state) => state )
    console.log(state)
    function getUser() {
        dispatch(getAccountInfo())
    }

    return(
        <div>
            <button onClick={redux}>redux</button>
            <button onClick={getUser}>getUser</button>
        </div>
    )
}
