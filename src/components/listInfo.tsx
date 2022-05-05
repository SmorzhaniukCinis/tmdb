import React from 'react';
import {getImage} from "../Common/getImage";
import s from "../styles/ListDescription.module.css";
import {Button, Link, Paper, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {getIsDarkTheme} from "../store/Selectors/accountSelectors";
import {getList} from "../store/Selectors/listSelectors";

const ListInfo = () => {

    const isDarkTheme = useSelector(getIsDarkTheme)
    const listDetails = useSelector(getList)

    return (
            <Paper elevation={7}>
                <div style={{
                    background: `url(${getImage('original', listDetails?.backdrop_path)}) no-repeat center`,
                    backgroundSize: '100%',
                    borderRadius: "5px"
                }}>
                    <div className={isDarkTheme ? s.darkBackground : s.lightBackground}>
                        <div>
                            <Typography sx={{fontSize: '35px'}} variant='h5'>
                                {listDetails?.name}
                            </Typography>
                            <Button variant={'contained'}>
                                <Link sx={{color:'inherit'}} href={`${listDetails?.id}/edit`}>
                                    Edit list
                                </Link>
                            </Button>
                        </div>
                        <Typography sx={{fontSize: '16px', mt: '15px'}}>
                            A list created by <br/>
                        </Typography>
                        <Typography sx={{fontSize: '20px'}}>
                            {listDetails?.created_by.name}
                        </Typography>
                        <Typography sx={{fontSize: '20px', mt: '15px'}}>
                            About this list
                        </Typography>
                        <Typography sx={{fontSize: '15px', opacity: '90%'}}>
                            {listDetails?.description ? listDetails?.description : 'No description'}
                        </Typography>
                    </div>
                </div>
            </Paper>
    );
};

export default ListInfo;