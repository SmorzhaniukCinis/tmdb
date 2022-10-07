import React from 'react';
import s from "../../MyLists/ListDescription.module.css";
import {Button, Card, CardActionArea, CardMedia, Paper, Typography} from "@mui/material";
import {getImage} from "../../../Common/functions/getImage";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "../../../store/Selectors/listSelectors";
import {useNavigate} from "react-router-dom";
import {mediaType} from "../../../Common/types";
import {MediaCardContent} from "./MediaCardContent";
import {ListItemActions} from "./ListItemActions";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import {deleteListItem} from "../../../store/listReducer";

const ListContent = () => {

    const listDetails = useSelector(getList)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const goToMedia = (id: number, mediaType: mediaType) => {
        navigate(`/${mediaType}/${id}`)
    }


    return (
        <Paper elevation={7} className={s.ItemsBlock}>
            {listDetails?.results.length >= 1
                ? listDetails?.results.map(item =>
                    <Card key={item.id} sx={{maxWidth: 290, m: '10px'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={getImage('w300', item.poster_path)}
                                alt="green iguana"
                                onClick={() => goToMedia(item.id, item.media_type)}
                            />
                            <MediaCardContent cardItem={item} comments={listDetails.comments} goToMedia={goToMedia}/>
                        </CardActionArea>
                        <CardActions>
                            <ListItemActions mediaId={item.id}
                                             listID={listDetails.id}
                                             mediaType={item.media_type}
                            />
                        </CardActions>
                    </Card>
                )
                : <Typography sx={{textAlign: 'center', margin: '20px'}} variant={'h5'}>No item</Typography>
            }
        </Paper>
    );
};

export default ListContent;