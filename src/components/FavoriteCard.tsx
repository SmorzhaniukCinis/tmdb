import React from 'react';
import {getImage} from "../Common/getImage";
import {Card, CardContent, Typography} from "@mui/material";
import s from "../styles/ProfileListWrapper.module.css";
import {FavoriteMovie, FavoriteTVShow} from "../API/accountAPI/accountTypes";
import {useSelector} from "react-redux";
import {getIsDarkTheme} from "../store/Selectors/accountSelectors";

type props = {
    originalTitle: string
    releaseDate: string
    overview: string
    backdropPath: string | null
    language: string
    posterPath: string | null
    voteAverage: number
    voteCount: number
}

export const FavoriteCard:React.FC<props> = (props:props) => {

    const isDarkTheme = useSelector(getIsDarkTheme)

    return (
        <Card  variant={'outlined'} sx={{minWidth: '500px', height: '345px', m: 1}}>
            <div style={{
                background: `url(${getImage('original', props.backdropPath)})`,
                backgroundSize: '100%'
            }}>
                <CardContent className={isDarkTheme ? s.blackCardWrapper : s.witheCardWrapper}>
                    <div>
                        <img height={'300px'} src={getImage('w200', props.posterPath)} alt=""/>
                    </div>
                    <div>
                        <Typography variant="h4" component="div">
                            {props.originalTitle}
                        </Typography>
                        <Typography>
                            {props.releaseDate}&nbsp;
                            <span className={s.language}>({props.language})</span>
                        </Typography>
                        <Typography sx={{mb: 1.5}} textOverflow={'test'}>
                            Users score:&nbsp;
                            <abbr title={`Votes: ${props.voteCount}`}>
                                <span className={s.voteAverage}>{props.voteAverage}</span>
                            </abbr>
                        </Typography>
                        <Typography sx={{width: '60%'}} variant="body2">
                            {props.overview}
                        </Typography>
                    </div>
                </CardContent>
            </div>

        </Card>
    );
};
