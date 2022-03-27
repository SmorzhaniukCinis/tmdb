import React, {useEffect, useState} from 'react';
import {createRequestToken, createSession} from "./API/authAPI";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createRequestTokenThunk} from "./store/AccountReducer";


function App() {


    const [sessionId, setSessionId] = useState('')

    useEffect(() => {
        const url = new URL(window.location.href)
        let approved =  url.searchParams.get('approved')
        let request_token = url.searchParams.get('request_token')
        if(approved && request_token != null) {
            createSession(request_token).then(res => res.success
                ? setSessionId(res.session_id)
                :null
            )
        }
    } , [])

  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Test/>}/>
        </Routes>
        <button >test</button>
    </div>
  );
}




const Test = () => {

    const dispatch = useDispatch()
    const redux = () => {
            dispatch(createRequestTokenThunk())
    }
    const state = useSelector((state) => state )
    console.log(state)


  return(
      <div>
          <button onClick={redux}>redux</button>
      </div>
  )
}

export default App;
