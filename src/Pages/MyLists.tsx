import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCreatedLists} from "../store/Selectors/accountSelectors";
import {getCreatedList} from "../store/accountReducer";
import {getIsAuth} from "../store/Selectors/authSelectors";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
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
            {createdLists.results.map(list => <Accordion key={list.id}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{list.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {list.description}
                    </Typography>
                </AccordionDetails>
            </Accordion>)}
        </div>
    );
};

export default MyLists;