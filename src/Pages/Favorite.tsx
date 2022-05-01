import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFavoriteMovie} from "../store/accountReducer";
import {getFavoriteMovieSelector} from "../store/Selectors/accountSelectors";
import {getIsAuth} from "../store/Selectors/authSelectors";
import {ToggleButton, ToggleButtonGroup} from "@mui/lab";
import {FavoriteMovieComponent} from "../components/FavoriteMovie";
import {FavoriteTV} from "../components/FavoriteTV";

export const Favorite = () => {

    const dispatch = useDispatch()
    const favoriteMovie = useSelector(getFavoriteMovieSelector)
    const isAuth = useSelector(getIsAuth)


    const [typeOfContent, setTypeOfContent] = React.useState('movie');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setTypeOfContent(newAlignment);
    };

    useEffect(() => {
        if (isAuth)
            dispatch(getFavoriteMovie())
    }, [dispatch, isAuth])

    return (
        <div>
            <ToggleButtonGroup
                sx={{marginLeft:'40px'}}
                color="primary"
                value={typeOfContent}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton sx={{width:'100px'}} value="movie">Movie</ToggleButton>
                <ToggleButton sx={{width:'100px'}} value="TV">TV</ToggleButton>
            </ToggleButtonGroup>

            { typeOfContent==='movie'
                ?favoriteMovie.results.map(movie =>
                <FavoriteMovieComponent movie={movie}/>
            )
            :<FavoriteTV/>
            }

        </div>
    );
};
