import React from 'react';
import {Box, Button, CardContent, Typography} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import {listType, movieAndTVType} from "../../../API/ListAPI/listTypes";
import {addComment, deleteListItem} from "../../../store/listReducer";
import {mediaType} from "../../../Common/types";
import {useDispatch} from "react-redux";
import mediaTitle from "../../../Common/Components/MediaTitle/MediaTitle";
import {ListItemActions} from "./ListItemActions";
import CardActions from "@mui/material/CardActions";

type props = {
    cardItem: movieAndTVType
    comments: { [key: string]: string }
    goToMedia: (id: number, mediaType: mediaType) => void
}

export const MediaCardContent: React.FC<props> = ({cardItem, comments, goToMedia}: props) => {
    return (
        <div>
            <CardContent sx={{pb: 0}}>
                <Typography sx={{height: '45px', fontSize: '20px', textOverflow: 'ellipsis'}}
                            gutterBottom variant="h5"
                            onClick={() => goToMedia(cardItem.id, cardItem.media_type)}
                            component="div">
                    {cardItem.name || cardItem.title}
                </Typography>
                <Box sx={{borderRadius: '7px', backgroundColor: 'divider', p: 1, mt: 1}}>
                    <Typography variant="body2" color="text.secondary">
                        {
                            comments[`movie:${cardItem.id}`]
                            || comments[`tv:${cardItem.id}`]
                            || 'no comment'
                        }
                    </Typography>
                </Box>
            </CardContent>

        </div>

    );
};

