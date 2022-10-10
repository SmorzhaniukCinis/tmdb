import {Navigate, Route} from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import MyLists from "./Pages/MyLists/MyLists";
import Auth from "./Pages/Auth/Auth";
import {ProfileListWrapper} from "./Pages/ProfileLIstWrapper/ProfileListWrapper";
import {RatedSeries} from "./Pages/RatedSeries/RatedSeries";
import {MediaPage} from "./Pages/MediaPage/MediaPage";
import {MediaReviews} from "./Pages/MediaReviews/MediaReviews";
import {MediaCredits} from "./Pages/MedaiCredits/MediaCredits";
import {MediaImagePage} from "./Pages/MediaImages/MediaImagePage";
import {SeasonsPage} from "./Pages/SeasonsPage/SeasonsPage";
import {SeasonDetails} from "./Pages/SeasonDetails/SeasonDetails";
import {ListDetails} from "./Pages/ListDetails/ListDetails";
import {NewList} from "./Pages/NewList/NewList";
import {PersonProfile} from "./Pages/PersonProfile/PersonProfile";
import {PersonPhotos} from "./Pages/PersonPhotos/PersonPhotos";
import {Review} from "./Pages/Review/Review";
import {MoviesPage} from "./Pages/MoviesPage/MoviesPage";
import TvShowsPage from "./Pages/TVShowsPage/TVShowsPage";
import {PeoplesPage} from "./Pages/PeoplesPage/PeoplesPage";
import {MediaListPage} from "./Pages/MediaListPage/MediaListPage";
import React, {ReactElement} from "react";

type routes = Array<{route:string, component: ReactElement}>

export const appRoutes:routes = [
    {route:'/account', component: <Profile/>},
    {route:'/myLists', component: <MyLists/>},
    {route:'/authentication', component: <Auth/>},
    {route:'/favorite', component: <ProfileListWrapper/>},
    {route:'/ratings', component: <ProfileListWrapper/>},
    {route:'/ratedSeries', component: <RatedSeries/>},
    {route:'/:media/:mediaId', component: <MediaPage/>},
    {route:'/:media/:mediaId/reviews', component: <MediaReviews/>},
    {route:'/:media/:mediaId/people', component: <MediaCredits/>},
    {route:'/:media/:mediaId/images', component: <MediaImagePage/>},
    {route:'/tv/:mediaId/seasons', component: <SeasonsPage/>},
    {route:'/tv/:mediaId/season/:seasonNumber', component: <SeasonDetails/>},
    {route:'/watchList', component: <ProfileListWrapper/>},
    {route:'/listDetails/:listId', component: <ListDetails/>},
    {route:'/listDetails/:listId/:isEditing', component: <NewList/>},
    {route:'/newList', component: <NewList/>},
    {route:'/person/:personId', component: <PersonProfile/>},
    {route:'/person/:personId/Photos', component: <PersonPhotos/>},
    {route:'/review/:reviewId', component: <Review/>},
    {route:'/tmdb', component: <Navigate to="/" />},
    {route:'/movies', component: <MoviesPage/>},
    {route:'/tvShow', component: <TvShowsPage/>},
    {route:'/peoples', component: <PeoplesPage/>},
    {route:'/discover/:mediaType', component: <MediaListPage/>},
]





















