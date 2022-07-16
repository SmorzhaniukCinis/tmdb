import * as React from 'react';
import {useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useSelector} from "react-redux";
import {getMovieDetailsSelector} from "../../../store/Selectors/movieSelectors";
import {TabPanel} from "../../../Common/Components/TabPanel";
import {SmallMediaReview} from "../../MediaReviews/Components/SmallMediaReview";
import {Link} from "react-router-dom";
import s from '../mediaPage.module.css'
import {getTVDetails} from "../../../store/Selectors/tvSelectors";
import {mediaType} from "../../../Common/types";
import {CommonResType} from "../../../API/accountAPI/accountTypes";
import {reviewType} from "../../../API/movieAPI/movieTypes";


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

type props = {
    mediaType: mediaType
}

export const MediaSocial:React.FC<props> = ({mediaType}:props) => {

    const [value, setValue] = React.useState(0);
    const movieDetails = useSelector(getMovieDetailsSelector)
    const tvDetails = useSelector(getTVDetails)
    const [currentReviews , setCurrentReviews] = useState<CommonResType<reviewType>>()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        if(mediaType === 'movie') {
            setCurrentReviews(movieDetails.reviews)
        } else {
            setCurrentReviews(tvDetails.reviews)
        }
    }, [mediaType, movieDetails.reviews, tvDetails.reviews])



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
                    currentReviews?.results.length
                        ?   <div>
                                <SmallMediaReview review={currentReviews.results[0]}/>
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
