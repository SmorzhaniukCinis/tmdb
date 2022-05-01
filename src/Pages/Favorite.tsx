import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFavoriteMovie} from "../store/accountReducer";
import {getFavoriteMovieSelector, getIsDarkTheme} from "../store/Selectors/accountSelectors";
import {getIsAuth} from "../store/Selectors/authSelectors";
import {Card, CardContent, Typography} from "@mui/material";
import {getImage} from "../Common/getImage";
import s from '../styles/favoritePage.module.css'

const Favorite = () => {

    const dispatch = useDispatch()
    const favoriteMovie = useSelector(getFavoriteMovieSelector)
    const isAuth = useSelector(getIsAuth)
    const isDarkTheme = useSelector(getIsDarkTheme)

    useEffect(() => {
        if (isAuth)
            dispatch(getFavoriteMovie())
    }, [dispatch, isAuth])

    return (
        <div>
            {favoriteMovie.results.map(movie =>
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
                                    <abbr className={s.votes} title={`Votes: ${movie.vote_count}`}>
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
            )}
        </div>
    );
};

export default Favorite;