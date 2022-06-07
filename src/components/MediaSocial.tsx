import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useSelector} from "react-redux";
import {getMovieDetailsSelector} from "../store/Selectors/movieSelectors";
import {Avatar, Paper} from "@mui/material";
import {getImage} from "../Common/getImage";
import s from '../styles/mediaPage.module.css'
import {getDate} from "../Common/getDate";
import {Link} from "react-router-dom";


interface TabPanelProps {
    children?: any
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const getAvatar = (path: string | null) => {
    if (path && !path.includes("https://www.gravatar.com")) {
        return getImage('original', path)
    } else {
        return path?.slice(1)
    }
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
                        ? <Paper elevation={5} sx={{p: 2}}>
                            <div className={s.review}>
                                < Avatar
                                    sx={{cursor: 'pointer', mr: 2, width: 70, height: 70}}
                                    alt={reviews.results[0].author_details.username}
                                    src={getAvatar(reviews.results[0].author_details.avatar_path)}
                                />
                                <div>
                                    <Typography>
                                        <span>added by</span>
                                        <span className={s.review__userName}>
                                        {reviews.results[0].author_details.username}
                                    </span>
                                    </Typography>
                                    <Typography className={s.review__Date}>
                                        <span>Was written on</span>
                                        <span className={s.review__Date__value}>
                                        {getDate(reviews.results[0].updated_at || reviews.results[0].created_at)}
                                    </span>
                                    </Typography>
                                    {reviews.results[0].content.length > 700
                                        ? <Typography className={s.review__content}>
                                            {reviews.results[0].content.substring(0, 700).concat('...')}
                                            <Link to={'/'} className={s.review__readMore}>read the rest</Link>
                                        </Typography>
                                        : <Typography className={s.review__content}>
                                            {reviews.results[0].content}
                                        </Typography>
                                    }
                                </div>

                            </div>

                        </Paper>
                        : <span>No review</span>
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Box>
    );
}
