import React, {useEffect} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createRequestTokenThunk, createSessionId} from "./store/authReducer";
import {accountActions, getAccountInfo} from "./store/accountReducer";
// @ts-ignore
import Profile from "./Pages/Profile";
import NavBar from "./components/NavBar";


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        const url = new URL(window.location.href)
        let approved =  url.searchParams.get('approved')
        let request_token = url.searchParams.get('request_token')
        if(approved && request_token != null) {
            dispatch(createSessionId(request_token))
        }
    } , [])

  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
    </div>
  );
}




const Home = () => {

    const dispatch = useDispatch()
    const redux = () => {
            dispatch(createRequestTokenThunk())
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

export default App;
