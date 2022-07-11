import React from 'react';
import s from "../../MyLists/ListDescription.module.css";
import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Paper, Typography} from "@mui/material";
import {getImage} from "../../../Common/functions/getImage";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "../../../store/Selectors/listSelectors";
import {deleteListItem} from "../../../store/listReducer";
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";
import {mediaType} from "../../../Common/types";

const ListContent = () => {

    const listDetails = useSelector(getList)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goToMedia = (id: number, mediaType: mediaType) => {
        navigate(`/${mediaType}/${id}`)
    }


    const deleteItem = (listId: number, mediaId: number) => {
        dispatch(deleteListItem(listId, mediaId))
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

                            <CardContent>
                                <Typography sx={{height: '45px', fontSize: '20px', textOverflow: 'ellipsis'}}
                                            gutterBottom variant="h5"
                                            onClick={() => goToMedia(item.id, item.media_type)}
                                            component="div">
                                    {item.name || item.title}
                                </Typography>
                                <DeleteIcon onClick={() => deleteItem(listDetails.id, item.id)}/>
                                <Typography>
                                    Comment:
                                </Typography>
                                <Box sx={{
                                    borderRadius: '7px',
                                    backgroundColor: 'divider',
                                    p: '5px'
                                }}>
                                    <Typography variant="body2" color="text.secondary">
                                        {listDetails?.comments[`movie:${item.id}`]
                                        || listDetails?.comments[`tv:${item.id}`]
                                        || 'no comment'}
                                    </Typography>
                                </Box>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
                : <Typography sx={{textAlign: 'center', margin: '20px'}} variant={'h5'}>No item</Typography>
            }

        </Paper>
    );
};

export default ListContent;