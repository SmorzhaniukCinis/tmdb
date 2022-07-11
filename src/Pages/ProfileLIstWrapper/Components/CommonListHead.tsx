import React from 'react';
import s from "../ProfileListWrapper.module.css";
import {Button, Link, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {mediaType} from "../../../Common/types";

type props = {
    title: 'Favorites' | 'Ratings' | 'Watchlist'
    setTypeOfContent: (mediaType:mediaType) => void
    typeOfContent: mediaType
    itemCount: [number, number]
    currentPage: 'favorite' | 'ratings' | 'watchList'
}

export const CommonListHead:React.FC<props> = (props:props) => {
    const {title, setTypeOfContent, typeOfContent, itemCount, currentPage} = props

    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: 'movie' | 'tv',) => {
        if (newAlignment) {
            setTypeOfContent(newAlignment);
        }
    };

    return (
        <div className={s.HeadTitle}>
            <Typography className={s.title} variant={'h5'}>
                {`My ${title}`}
            </Typography>
            <ToggleButtonGroup
                sx={{marginLeft: '40px'}}
                color="primary"
                value={typeOfContent}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton sx={{width: '100px'}} value="movie">Movie <span
                    className={s.totalItemCount}>{itemCount[0]}</span> </ToggleButton>
                <ToggleButton sx={{width: '100px'}} value="TV">TV <span
                    className={s.totalItemCount}>{itemCount[1]}</span></ToggleButton>
            </ToggleButtonGroup>
            {currentPage === 'ratings' && typeOfContent === 'tv' ?
                <Button className={s.ratedSeriesButton}>
                    <Link className={s.ratedSeriesLink} href={'/ratedSeries'}>
                        Go to rated series
                    </Link>
                </Button> : null}
        </div>
    );
};

