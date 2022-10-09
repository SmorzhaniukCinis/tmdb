import React, {useEffect} from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ContentTab from "./ContentTab";
import Box from "@mui/material/Box";
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getValueFromURL, loadData} from "../MediaListFunc";
import {
    GetNowPlayingMovie, GetOnAirTVShow,
    GetPopularMovie, GetPopularTVShow,
    GetTopRatedMovie, GetTopRatedTVShow,
    GetUpcomingMovie
} from "../../../store/discoverMediaReducer";
import {getIsLoading} from "../../../store/Selectors/discoverMediaSelectors";
import {Loader} from "../../../Common/Components/Loader";


function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const ContentSections = () => {

    const [value, setValue] = React.useState(0);
    const {mediaType} = useParams()
    const dispatch = useDispatch()
    const [search, setSearch] = useSearchParams();
    const section = search.get('section')

    useEffect(() => {
        setValue(getValueFromURL(section))
    }, [section])


    useEffect(() => {
        if (mediaType === 'movie') {
            switch (value) {
                case 0:
                    dispatch(GetTopRatedMovie(1))
                    break
                case 1:
                    dispatch(GetPopularMovie(1))
                    break
                case 2:
                    dispatch(GetUpcomingMovie(1))
                    break
                case 3:
                    dispatch(GetNowPlayingMovie(1))
                    break
            }
        } else {
            switch (value) {
                case 0:
                    dispatch(GetTopRatedTVShow(1))
                    break
                case 1:
                    dispatch(GetPopularTVShow(1))
                    break
                case 2:
                    dispatch(GetOnAirTVShow(1))
                    break
            }
        }
    }, [dispatch, mediaType, value])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        loadData({mediaType, value: newValue, setSearch})
    };

    return (
        <Box
            sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
        >
            <Tabs orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{borderRight: 1, borderColor: 'divider', width: '9%'}}
            >
                <Tab label="Top Rated" {...a11yProps(0)} />
                <Tab label="Popular" {...a11yProps(1)} />
                {mediaType === 'tv'
                    ? <Tab label="On air" {...a11yProps(2)} />
                    : <Tab label="Upcoming" {...a11yProps(2)} />}

                {mediaType === 'tv'
                    ? null
                    : <Tab label="Now Playing" {...a11yProps(3)} />}
            </Tabs>

            <ContentTab value={value} index={0}/>
            <ContentTab value={value} index={1}/>
            <ContentTab value={value} index={2}/>
            <ContentTab value={value} index={3}/>
        </Box>
    );
};

