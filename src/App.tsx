import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./Pages/Profile";
import {NavBar} from "./components/NavBar";
import Auth from "./Pages/Auth";
import {Alert, Container, ThemeProvider} from "@mui/material";
import {Home} from "./Pages/Home";
import {getEventMessages, getIsDarkTheme} from "./store/Selectors/accountSelectors";
import {darkTheme, lightTheme} from "./materialUI/ThemeStyles";
import {authActions, createGuestSessionId} from "./store/authReducer";
import {accountActions, getAccountInfo, getCreatedList} from "./store/accountReducer";
import {getSessionId} from "./store/Selectors/authSelectors";
import MyLists from "./Pages/MyLists";
import {ProfileListWrapper} from "./Pages/ProfileListWrapper";
import {RatedSeries} from "./Pages/RatedSeries";
import {ListDetails} from "./Pages/listDetails";
import {NewList} from "./Pages/NewList";
import {SearchResult} from "./Pages/SearchResult";
import {MediaPage} from "./Pages/MediaPage";
import {PersonProfile} from "./Pages/PersonProfile";


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
                            <Route path={'/result/:resType/search=:query/page=:page'} element={<SearchResult/>}/>
                        </Route>
                        <Route path={'/account'} element={<Profile/>}/>
                        <Route path={'/myLists'} element={<MyLists/>}/>
                        <Route path={'/authentication'} element={<Auth/>}/>
                        <Route path={'/favorite'} element={<ProfileListWrapper/>}/>
                        <Route path={'/ratings'} element={<ProfileListWrapper/>}/>
                        <Route path={'/ratedSeries'} element={<RatedSeries/>}/>
                        <Route path={'/:media/:mediaId'} element={<MediaPage/>}/>
                        <Route path={'/watchList'} element={<ProfileListWrapper/>}/>
                        <Route path={'/listDetails/:listId'} element={<ListDetails/>}/>
                        <Route path={'/listDetails/:listId/:isEditing'} element={<NewList/>}/>
                        <Route path={'/newList'} element={<NewList/>}/>
                        <Route path={'/person/:personId'} element={<PersonProfile/>}/>
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
