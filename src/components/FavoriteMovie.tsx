import React from 'react';
import {getImage} from "../Common/getImage";
import {Card, CardContent, Typography} from "@mui/material";
import s from "../styles/favoritePage.module.css";
import {FavoriteMovie} from "../API/accountAPI/accountTypes";
import {useSelector} from "react-redux";
import {getIsDarkTheme} from "../store/Selectors/accountSelectors";

type props = {
    movie: FavoriteMovie
}

export const FavoriteMovieComponent:React.FC<props> = ({movie}:props) => {

    const isDarkTheme = useSelector(getIsDarkTheme)

    return (
        <Card key={movie.id} variant={'outlined'} sx={{minWidth: '500px', height: '345px', m: 1}}>
            <div style={{
                background: `url(${getImage('original', movie.backdrop_path)})`,
                backgroundSize: '100%'
            }}>
                <CardContent className={isDarkTheme ? s.blackCardWrapper : s.witheCardWrapper}>
                    <div>
                        <img height={'300px'} src={getImage('w200', movie.poster_path)} alt=""/>
                    </div>
                    <div>
                        <Typography variant="h4" component="div">
                            {movie.original_title}
                        </Typography>
                        <Typography>
                            {movie.release_date}&nbsp;
                            <span className={s.language}>({movie.original_language})</span>
                        </Typography>
                        <Typography sx={{mb: 1.5}} textOverflow={'test'}>
                            Users score:&nbsp;
                            <abbr title={`Votes: ${movie.vote_count}`}>
                                <span className={s.voteAverage}>{movie.vote_average}</span>
                            </abbr>
                        </Typography>
                        <Typography sx={{width: '60%'}} variant="body2">
                            {movie.overview}
                        </Typography>
                    </div>
                </CardContent>
            </div>

        </Card>
    );
};
