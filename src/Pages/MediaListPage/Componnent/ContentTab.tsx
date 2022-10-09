import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentMedia} from "../../../store/Selectors/discoverMediaSelectors";
import {
    GetNowPlayingMovie,
    GetOnAirTVShow,
    GetPopularMovie,
    GetPopularTVShow,
    GetTopRatedMovie,
    GetTopRatedTVShow,
    GetUpcomingMovie
} from "../../../store/DiscoverMediaReducer";
import {useSearchParams} from "react-router-dom";

interface TabPanelProps {
    index: number;
    value: number;
    contentType: string | undefined
}

export const ContentTab = (props: TabPanelProps) => {

    const {value, index, contentType} = props;

    const currentMedia = useSelector(getCurrentMedia)




    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {
                        currentMedia?.map(media => <div key={media.id}>{media.name}</div>)
                    }
                </Box>
            )}
        </div>
    );
}

export default ContentTab;