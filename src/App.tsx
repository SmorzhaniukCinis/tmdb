import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./Pages/Profile/Profile";
import {NavBar} from "./Pages/NavBar/NavBar";
import Auth from "./Pages/Auth/Auth";
import {Alert, Container, ThemeProvider} from "@mui/material";
import {Home} from "./Pages/Home/Home";
import {getEventMessages, getIsDarkTheme} from "./store/Selectors/accountSelectors";
import {darkTheme, lightTheme} from "./materialUI/ThemeStyles";
import {authActions, createGuestSessionId} from "./store/authReducer";
import {accountActions, getAccountInfo, getCreatedList} from "./store/accountReducer";
import {getSessionId} from "./store/Selectors/authSelectors";
import MyLists from "./Pages/MyLists/MyLists";
import {ProfileListWrapper} from "./Pages/ProfileLIstWrapper/ProfileListWrapper";
import {RatedSeries} from "./Pages/RatedSeries/RatedSeries";
import {ListDetails} from "./Pages/ListDetails/ListDetails";
import {NewList} from "./Pages/NewList/NewList";
import {SearchResult} from "./Pages/SearchResult/SearchResult";
import {MediaPage} from "./Pages/MediaPage/MediaPage";
import {PersonProfile} from "./Pages/PersonProfile/PersonProfile";
import {PersonPhotos} from "./Pages/PersonPhotos/PersonPhotos";
import {Review} from "./Pages/Review/Review";
import {MediaReviews} from "./Pages/MediaReviews/MediaReviews";
import {MediaCredits} from "./Pages/MedaiCredits/MediaCredits";


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
                        <Route path={'/:media/:mediaId/reviews'} element={<MediaReviews/>}/>
                        <Route path={'/:media/:mediaId/people'} element={<MediaCredits/>}/>
                        <Route path={'/watchList'} element={<ProfileListWrapper/>}/>
                        <Route path={'/listDetails/:listId'} element={<ListDetails/>}/>
                        <Route path={'/listDetails/:listId/:isEditing'} element={<NewList/>}/>
                        <Route path={'/newList'} element={<NewList/>}/>
                        <Route path={'/person/:personId'} element={<PersonProfile/>}/>
                        <Route path={'/person/:personId/Photos'} element={<PersonPhotos/>}/>
                        <Route path={'/review/:reviewId'} element={<Review/>}/>
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
