import React from "react";
import {createGuestSessionId, deleteSessionId} from "../store/authReducer";
import {useDispatch} from "react-redux";

export const Home = () => {
    const dispatch = useDispatch()
    const click = () => {
      dispatch(deleteSessionId())
    }

    return(
        <div>
            <button onClick={click}>test</button>
            home
        </div>
    )
}
