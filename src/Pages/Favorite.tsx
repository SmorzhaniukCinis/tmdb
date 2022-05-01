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
    console.log(favoriteMovie)



    return (
        <div>
            {favoriteMovie.results.map(movie =>
                <Card key={movie.id} variant={'outlined'} sx={{minWidth: '500px', height: '345px', m: 1}}>
                    <div style={{background: `url(${getImage('original', movie.backdrop_path)})`, backgroundSize: '100%'}}>
                        <CardContent className={isDarkTheme ? s.blackCardWrapper : s.witheCardWrapper}>
                            <div>
                                <img height={'300px'} src={getImage('w200', movie.poster_path)} alt=""/>
                            </div>
                            <div>
                                <Typography variant="h5" component="div">
                                    {movie.original_title}
                                </Typography>
                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                    s
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br/>
                                    {'"a benevolent smile"'}
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