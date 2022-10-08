import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentMedia} from "../../../store/Selectors/discoverMediaSelectors";
import {GetTopRatedMovie} from "../../../store/DiscoverMediaRedicer";

interface TabPanelProps {
    index: number;
    value: number;
    contentType: string
}

export const ContentTab = (props: TabPanelProps) => {

    const {value, index, contentType  } = props;
    const dispatch = useDispatch()
    const currentMedia = useSelector(getCurrentMedia)

    useEffect(() => {
        dispatch(GetTopRatedMovie(1))
    }, [])

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {
                        currentMedia?.map(media => <div key={media.id}>{media.name}</div>)
                    }
                </Box>
            )}
        </div>
    );
}

export default ContentTab;