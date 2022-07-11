import React from 'react';
import s from "../../MediaPage/mediaPage.module.css";
import {Avatar, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import {getDate} from "../../../Common/functions/getDate";
import {Link} from "react-router-dom";
import {getImage} from "../../../Common/functions/getImage";
import {reviewType} from "../../../API/movieAPI/movieTypes";

type props = {
    review: reviewType
}

export const SmallMediaReview = ({review}: props) => {


    const getAvatar = (path: string | null) => {
        if (path && !path.includes("https://www.gravatar.com")) {
            return getImage('original', path)
        } else {
            return path?.slice(1)
        }
    }

    return (
        <Paper elevation={5} sx={{p: 2, mb:2}}>
            <div className={s.review}>
                < Avatar
                    sx={{cursor: 'pointer', mr: 2, width: 70, height: 70}}
                    alt={review.author_details.username}
                    src={getAvatar(review.author_details.avatar_path)}
                />
                <div>
                    <Typography>
                        <span>added by</span>
                        <span className={s.review__userName}>
                                        {review.author_details.username}
                                    </span>
                    </Typography>
                    <Typography className={s.review__Date}>
                        <span>Was written on</span>
                        <span className={s.review__Date__value}>
                                        {getDate(review.updated_at || review.created_at)}
                                    </span>
                    </Typography>
                    {review.content.length > 700
                        ? <Typography className={s.review__content}>
                            {review.content.substring(0, 700).concat('...')}
                            <Link to={`/review/${review.id}`} className={s.review__readMore}>read the rest</Link>
                        </Typography>
                        : <Typography className={s.review__content}>
                            {review.content}
                        </Typography>
                    }
                </div>

            </div>

        </Paper>
    );
};

