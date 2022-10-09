import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useNavigate, useParams} from "react-router-dom";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const MediaTabs = () => {

    const [value, setValue] = React.useState(0);
    const params = useParams()
    const navigate = useNavigate()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        if(newValue === 0) {
            navigate('/discover/movie?section=topRated&page=1')
        } else if (newValue === 1) {
            navigate('/discover/tv?section=topRated&page=1')
        }
    };

    useEffect(() => {
        if(params.mediaType === 'movie') {
            setValue(0)
        } else {
            setValue(1)
        }
    }, [params.mediaType])

    return (
        <Box sx={{ width: '100%', mb:1 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="movies" {...a11yProps(0)} />
                    <Tab label="tv shows" {...a11yProps(1)} />
                </Tabs>
            </Box>
        </Box>
    );
};

