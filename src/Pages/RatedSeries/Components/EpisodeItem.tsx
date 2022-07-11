import React from 'react';
import {ratedTVEpisodes} from "../../../API/accountAPI/accountTypes";
import {getImage} from "../../../Common/functions/getImage";
import {Card, CardContent, Typography} from "@mui/material";
import s from "../../ProfileLIstWrapper/ProfileListWrapper.module.css";
import {useSelector} from "react-redux";
import {getIsDarkTheme} from "../../../store/Selectors/accountSelectors";
import {Rating} from "@mui/lab";

export const EpisodeItem = ({item}: { item: ratedTVEpisodes }) => {

    const isDarkTheme = useSelector(getIsDarkTheme)


    return (
        <Card  variant={'outlined'} sx={{minWidth: '800px', height: '300px', m: 1}}>
            <div style={{
                background: `url(${getImage('original', item.still_path)})`,
                backgroundSize: '100%',
                height: '100%'
            }}>
                <CardContent className={isDarkTheme ? s.blackEpisodeCardWrapper : s.witheEpisodeCardWrapper}>
                    <div>
                        <Typography variant="h4" component="div">
                            {item.name}
                        </Typography>
                        <Typography>
                            <span className={s.EpisodeDetails}>Season:&nbsp;{item.season_number}</span>
                            <span className={s.EpisodeDetails}>Episode:&nbsp;{item.episode_number}</span>
                            <span className={s.EpisodeDetails}> ({item.air_date})</span>
                        </Typography>
                        <Typography>
                            <Rating name="half-rating" defaultValue={item.rating/2} precision={0.5} />
                        </Typography>
                        <Typography sx={{mb: 1.5}} textOverflow={'test'}>
                            Users score:&nbsp;
                            <abbr title={`Votes: ${item.vote_count}`}>
                                <span className={s.voteAverage}>{item.vote_average}</span>
                            </abbr>
                        </Typography>
                        <Typography sx={{width: '60%'}} variant="body2">
                            {item.overview}
                        </Typography>
                    </div>
                </CardContent>
            </div>

        </Card>
    );
};
