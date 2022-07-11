import React from 'react';
import s from "../../ProfileLIstWrapper/ProfileListWrapper.module.css";
import {Card, CardContent, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {getIsDarkTheme} from "../../../store/Selectors/accountSelectors";
import {useNavigate} from "react-router-dom";
import {createdList} from "../../../API/accountAPI/accountTypes";

type props = {
    list: createdList
}

const MyListItem:React.FC<props> = ({list}:props) => {

    const isDarkTheme = useSelector(getIsDarkTheme)
    const navigate = useNavigate()

    const goToList = (id: number) => {
        navigate(`/listDetails/${id}`)
    }

    return (
        <Card className={s.listItem} key={list.id} variant="outlined">
            <CardContent className={isDarkTheme ? s.listItemDark : s.listItemLight}>
                <Typography onClick={() => goToList(list.id)} className={s.listName} variant="h5"
                            component="div">
                    {list.name}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {list.description || 'No description'}
                </Typography>
                <Typography variant="body1">
                    {list.item_count} items
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MyListItem;