import React from 'react';
import s from "../styles/ListDescription.module.css";
import {Box, Card, CardActionArea, CardContent, CardMedia, Paper, Typography} from "@mui/material";
import {getImage} from "../Common/getImage";
import {useSelector} from "react-redux";
import {getList} from "../store/Selectors/listSelectors";

const ListContent = () => {

    const listDetails = useSelector(getList)

    return (
        <Paper elevation={7} className={s.ItemsBlock}>
            {listDetails?.results.map(item =>
                <Card key={item.id} sx={{maxWidth: 290, m: '10px'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={getImage('w300', item.poster_path)}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography sx={{minHeight: '60px', fontSize:'20px'}} gutterBottom variant="h5" component="div">
                                {item.name || item.title}
                            </Typography>
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
            )}

        </Paper>
    );
};

export default ListContent;