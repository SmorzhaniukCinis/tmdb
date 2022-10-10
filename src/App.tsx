import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {NavBar} from "./Pages/NavBar/NavBar";
import {Alert, Container, ThemeProvider} from "@mui/material";
import {Home} from "./Pages/Home/Home";
import {getEventMessages, getIsDarkTheme} from "./store/Selectors/accountSelectors";
import {darkTheme, lightTheme} from "./materialUI/ThemeStyles";
import {authActions, createGuestSessionId} from "./store/authReducer";
import {accountActions, getAccountInfo, getCreatedList} from "./store/accountReducer";
import {getSessionId} from "./store/Selectors/authSelectors";
import {SearchResult} from "./Pages/SearchResult/SearchResult";
import {RecommendationsContentPage} from "./Pages/Recommendations/RecommendationsContentPage";
import {appRoutes} from "./appRoutes";


function App() {

    const dispatch = useDispatch()
    const isDarkTheme = useSelector(getIsDarkTheme)
    const sessionId = useSelector(getSessionId)
    const messages = useSelector(getEventMessages)

    useEffect(() => {
        const sessionId = localStorage.getItem('sessionId')
        if (sessionId) {
            dispatch(authActions.setSessionId(sessionId))
            dispatch(authActions.setAuthentication(true))
        } else {
            dispatch(createGuestSessionId())
        }
    }, [dispatch])

    useEffect(() => {
        if (sessionId) {
            dispatch(getAccountInfo())
            dispatch(getCreatedList())
        } else {
            dispatch(accountActions.deleteAccountDetails())
        }
    }, [dispatch, sessionId])


    return (
        <div>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <NavBar/>
                <Container fixed style={{marginTop: 40, marginBottom: 40}}>
                    <Routes>
                        <Route path={'/'} element={<Home/>}>
                            <Route index element={<RecommendationsContentPage/>}/>
                            <Route path={'/result/:resType/search=:query/page=:page'} element={<SearchResult/>}/>
                        </Route>
                        {appRoutes.map(routeItem =>  <Route path={routeItem.route} element={routeItem.component}/>)}
                    </Routes>
                </Container>
            </ThemeProvider>
            <div style={{position: 'fixed', bottom: '50px', right: '30px'}}>
                    {messages.map((message, index) =>
                        <Alert sx={{m:1}} key={index} severity="success">
                            {message}
                        </Alert>
                    )}
            </div>
        </div>
    );
}

export default App;
