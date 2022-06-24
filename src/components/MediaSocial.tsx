import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useSelector} from "react-redux";
import {getMovieDetailsSelector} from "../store/Selectors/movieSelectors";
import {TabPanel} from "./TabPanel";
import {SmallMediaReview} from "./SmallMediaReview";
import {Link} from "react-router-dom";
import s from '../styles/mediaPage.module.css'


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export const MediaSocial = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const {reviews} = useSelector(getMovieDetailsSelector)

    return (
        <Box sx={{width: '100%', mt: 4}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Typography variant={'h5'} sx={{m: 1}}>
                    Social
                </Typography>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Reviews" {...a11yProps(0)} />
                    <Tab label="Discussions" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {
                    reviews.results.length
                        ?   <div>
                                <SmallMediaReview review={reviews.results[0]}/>
                                <Link className={s.allReviewLink} to={`reviews`}>View all review</Link>
                            </div>
                        :   <span>No review</span>
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                Discussions not available...
            </TabPanel>
        </Box>
    );
}
