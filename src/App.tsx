import React, {useEffect, useState} from 'react';
import {createRequestToken, createSession} from "./API/authAPI";
import {Route, Routes} from "react-router-dom";


function App() {

    const creatingToken = async () => {
        const res = await createRequestToken()
        if (res.success) {
            window.location.replace(
                `https://www.themoviedb.org/authenticate/${res.request_token}?redirect_to=http://localhost:3000`
            )
        }
    }

    useEffect(() => {
        const url = new URL(window.location.href)
        let approved =  url.searchParams.get('approved')
        let request_token = url.searchParams.get('request_token')
        if(approved && request_token != null) {
            createSession(request_token).then(res => console.log(res))
        }
    } , [])

  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Test/>}/>
        </Routes>
        <button onClick={creatingToken}>test</button>
    </div>
  );
}

const Test = () => {
  return(
      <div>
          test
      </div>
  )
}

export default App;
