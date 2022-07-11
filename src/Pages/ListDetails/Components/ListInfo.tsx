import React from 'react';
import {getImage} from "../../../Common/functions/getImage";
import s from "../../MyLists/ListDescription.module.css";
import {Button, Link, Paper, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getIsDarkTheme} from "../../../store/Selectors/accountSelectors";
import {getList} from "../../../store/Selectors/listSelectors";
import {DeleteList} from "../../../store/listReducer";
import {useNavigate} from "react-router-dom";
import {getCreatedList} from "../../../store/accountReducer";

const ListInfo = () => {

    const isDarkTheme = useSelector(getIsDarkTheme)
    const listDetails = useSelector(getList)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const deleteListHandler = (id:number) => {
        dispatch(DeleteList(id))
        dispatch(getCreatedList())
        navigate('/myLists')
    }

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
                        <Link sx={{color: 'inherit'}} href={`${listDetails?.id}/edit`}>
                            <Button variant={'contained'}>
                                Edit list
                            </Button>
                        </Link>
                        <Button sx={{marginLeft: '20px'}} onClick={()=>deleteListHandler(listDetails.id)} variant={'contained'}>
                            delete list
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