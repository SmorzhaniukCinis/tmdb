import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./Pages/Profile";
import {NavBar} from "./components/NavBar";
import Auth from "./Pages/Auth";
import {Container, ThemeProvider} from "@mui/material";
import {Home} from "./Pages/Home";
import {getIsDarkTheme} from "./store/Selectors/accountSelectors";
import {darkTheme, lightTheme} from "./materialUI/ThemeStyles";
import {authActions} from "./store/authReducer";
import {accountActions, getAccountInfo} from "./store/accountReducer";
import {getSessionId} from "./store/Selectors/authSelectors";


function App() {

    const dispatch = useDispatch()

    useEffect(()=> {
        const sessionId = localStorage.getItem('sessionId')
        if(sessionId) {
            dispatch(authActions.setSessionId(sessionId))
            dispatch(authActions.setAuthentication(true))
        }
    }, [dispatch])

    const sessionId = useSelector(getSessionId)

    useEffect(() => {
        if (sessionId)
            dispatch(getAccountInfo())
        else {
            dispatch(accountActions.deleteAccountDetails())
        }
    }, [dispatch, sessionId])



    const isDarkTheme = useSelector(getIsDarkTheme)

    return (
        <div>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <NavBar/>
                <Container fixed style={{marginTop: 40}}>

                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/account'} element={<Profile/>}/>
                        <Route path={'/authentication'} element={<Auth/>}/>
                    </Routes>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
