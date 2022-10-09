import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContentTab from "./Componnent/ContentTab";
import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {
    GetNowPlayingMovie, GetOnAirTVShow,
    GetPopularMovie, GetPopularTVShow,
    GetTopRatedMovie, GetTopRatedTVShow,
    GetUpcomingMovie
} from "../../store/DiscoverMediaReducer";
import {useDispatch} from "react-redux";
import {getValueFromURL, loadData} from "./Functions/MediaListFunc";
import {mediaType} from "../../Common/types";
import {ContentSections} from "./Componnent/ContentSections";
import {MediaTabs} from "./Componnent/MediaTabs";




export const MediaListPage = () => {


    return (
        <div>
            <MediaTabs/>
            <ContentSections/>
        </div>
    );
}
