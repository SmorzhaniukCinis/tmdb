import React from 'react';
import s from "../styles/mediaPage.module.css";
import {Tooltip, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {getMovieStatsSelector} from "../store/Selectors/movieSelectors";
import {ListMenu} from "./ListMenu";
import {getCreatedLists} from "../store/Selectors/accountSelectors";
import {mediaType} from "../Common/types";
import MediaRating from "./MediaRating";
import MediaToolsButtons from "./MediaToolsButtons";
import {getTVStatsSelector} from "../store/Selectors/tvSelectors";

type props = {
    voteCount: number
    voteAverage: number
    mediaId: number
    mediaType: mediaType
}

export const MediaTools = ({voteCount, voteAverage, mediaId, mediaType}: props) => {

    const movieStats = useSelector(getMovieStatsSelector)
    const TVStats = useSelector(getTVStatsSelector)
    const lists = useSelector(getCreatedLists)


    const [open, setOpen] = React.useState(false);
    const openListsMenu = () => {
        setOpen(true);
    }


    return (
        <div className={s.iconsWrapper}>

            <MediaToolsButtons openListsMenu={openListsMenu}
                               mediaId={mediaId}
                               mediaType={mediaType}
                               TVStats={TVStats}
                               movieStats={movieStats}/>

            <div>
                <Tooltip title={`Votes: ${voteCount}`} followCursor>
                    <Typography sx={{m: 1, width: '120px'}}>
                        {`Users score: ${voteAverage}`}
                    </Typography>
                </Tooltip>
            </div>

            <MediaRating mediaType={mediaType} TVStats={TVStats} movieStats={movieStats}/>

            <ListMenu isOpen={open} setOpen={setOpen} lists={lists} mediaId={mediaId}/>

        </div>
    )
}
