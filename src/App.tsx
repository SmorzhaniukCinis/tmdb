import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createSessionId} from "./store/authReducer";
// @ts-ignore
import Profile from "./Pages/Profile";
import {NavBar} from "./components/NavBar";
import {Auth} from "./Pages/Auth";
import {createTheme, ThemeProvider} from "@mui/material";
import {Home} from "./Pages/Home";
import {getIsDarkTheme} from "./store/Selectors/accountSelectors";


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        const url = new URL(window.location.href)
        let approved = url.searchParams.get('approved')
        let request_token = url.searchParams.get('request_token')
        if (approved && request_token != null) {
            dispatch(createSessionId(request_token))
        }
    }, [])

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#0c304d',
            },
        },
    });
    
    const isDarkTheme = useSelector(getIsDarkTheme)

    return (
        <div>
            <ThemeProvider theme={isDarkTheme?darkTheme:lightTheme}>
                <NavBar/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/account'} element={<Profile/>}/>
                    <Route path={'/authentication'} element={<Auth/>}/>
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
