import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists} from "../store/Selectors/accountSelectors";
import {getCreatedList} from "../store/accountReducer";
import {getIsAuth} from "../store/Selectors/authSelectors";
import {Accordion, AccordionDetails, AccordionSummary, Card, CardActions, CardContent, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {getImage} from "../Common/getImage";

const MyLists = () => {

    const createdLists = useSelector(getCreatedLists)
    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuth)
        dispatch(getCreatedList())
    }, [isAuth, dispatch])


    return (
        <div>
            {createdLists.results.map(list => <Card variant="outlined" sx={{ minWidth: 275 , mb: 3}}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {list.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {list.description || 'No description'}
                    </Typography>
                    <Typography variant="body1">
                        {list.item_count} items
                    </Typography>
                    <Typography variant="body1">
                        {list.list_type}
                    </Typography>
                </CardContent>
            </Card>)}
        </div>
    );
};

export default MyLists;