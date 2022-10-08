import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContentTab from "./Componnent/ContentTab";



function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const MediaListPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Top Rated" {...a11yProps(0)} />
                <Tab label="Popular" {...a11yProps(1)} />
                <Tab label="Upcoming" {...a11yProps(2)} />
                <Tab label="Now Playing" {...a11yProps(3)} />

            </Tabs>
            <ContentTab value={value} index={0} contentType={''}/>
            <ContentTab value={value} index={1} contentType={''}/>
            <ContentTab value={value} index={2} contentType={''}/>
            <ContentTab value={value} index={3} contentType={''}/>
        </Box>
    );
}
