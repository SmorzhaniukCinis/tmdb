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
import {getCreatedList} from "./store/accountReducer";


function App() {

    const dispatch = useDispatch()

    useEffect(()=> {
        const sessionId = localStorage.getItem('sessionId')
        if(sessionId) {
            dispatch(authActions.setSessionId(sessionId))
            dispatch(authActions.setAuthentication(true))
        }
    }, [])



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
