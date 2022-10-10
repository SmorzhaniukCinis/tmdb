import React from 'react';
import s from "../ProfileListWrapper.module.css";
import {getImage} from "../../../Common/functions/getImage";
import {CardContent, Rating, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getIsDarkTheme} from "../../../store/Selectors/accountSelectors";
import {getIsRatingLoading} from "../../../store/Selectors/movieSelectors";
import {rateMovie} from "../../../store/movieReducer";
import {useNavigate} from "react-router-dom";
import {mediaType} from "../../../Common/types";
import {RateTV} from "../../../store/TVReducer";

type props = {
    media: {
        type: mediaType
        id: number
        originalTitle: string
        releaseDate: string
        overview: string
        backdropPath: string | null
        language: string
        posterPath: string | null
        voteAverage: number
        voteCount: number
        rating: number | undefined
    }
}

const ItemCardContent = ({media}:props) => {

    const isDarkTheme = useSelector(getIsDarkTheme)
    const isRatingLoading = useSelector(getIsRatingLoading)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const goToMedia = (id: number, mediaType: mediaType) => {
        navigate(`/${mediaType}/${id}`)
    }
    const rateMedia = (value: number) => {
        if (media.type === 'movie') {
            dispatch(rateMovie(Number(media.id), value))
        } else {
            dispatch(RateTV(media.id, value))
        }
    }

    return (
        <CardContent className={isDarkTheme ? s.blackCardWrapper : s.witheCardWrapper}>
            <div>
                <img className={s.poster}
                     onClick={() => goToMedia(media.id, media.type)}
                     height={'300px'}
                     src={getImage('w200', media.posterPath)}
                     alt="poster"/>
            </div>
            <div>
                <Typography
                    sx={{cursor: 'pointer'}}
                    variant="h4"
                    component="div"
                    onClick={() => goToMedia(media.id, media.type)}>
                    {media.originalTitle}
                </Typography>
                <Typography>
                    {media.releaseDate}&nbsp;
                    <span className={s.language}>({media.language})</span>
                </Typography>
                {
                    media.rating
                        ? <Typography>
                            <Rating onChange={(event, newValue) => {
                                if (newValue) {
                                    rateMedia(newValue * 2)
                                }
                            }}
                                    name="half-rating"
                                    disabled={isRatingLoading}
                                    defaultValue={media.rating / 2} precision={0.5}/>
                        </Typography>
                        : null
                }
                <Typography sx={{mb: 1.5}} textOverflow={'test'}>
                    Users score:&nbsp;
                    <abbr title={`Votes: ${media.voteCount}`}>
                        <span className={s.voteAverage}>{media.voteAverage}</span>
                    </abbr>
                </Typography>
                <Typography sx={{width: '60%'}} variant="body2">
                    {media.overview}
                </Typography>
            </div>
        </CardContent>
    );
};

export default ItemCardContent;