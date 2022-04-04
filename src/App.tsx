import React from 'react';
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import Profile from "./Pages/Profile";
import {NavBar} from "./components/NavBar";
import Auth from "./Pages/Auth";
import {Container, ThemeProvider} from "@mui/material";
import {Home} from "./Pages/Home";
import {getIsDarkTheme} from "./store/Selectors/accountSelectors";
import {darkTheme, lightTheme} from "./materialUI/ThemeStyles";


function App() {



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
