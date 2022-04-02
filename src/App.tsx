import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authentication, createRequestTokenThunk, createSessionId} from "./store/authReducer";
import {getAccountInfo} from "./store/accountReducer";
// @ts-ignore
import Profile from "./Pages/Profile";
import {NavBar} from "./components/NavBar";
import {Auth} from "./Pages/Auth";


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

        <NavBar />
        <div>ds1</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <div>ds</div>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/account'} element={<Profile/>}/>
            <Route path={'/authentication'} element={<Auth/>}/>
        </Routes>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
            <div>d</div>
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

export default App;
