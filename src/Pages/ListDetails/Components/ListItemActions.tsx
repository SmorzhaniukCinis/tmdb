import React from 'react';
import {Box, Button, Popover, TextField, Typography} from "@mui/material";
import {addComment, deleteListItem} from "../../../store/listReducer";
import {useDispatch} from "react-redux";
import {listType} from "../../../API/ListAPI/listTypes";
import {mediaType} from "../../../Common/types";
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from "@mui/material/Tooltip";
import {AddCommentForm} from "./AddCommentForm";
import DeleteIcon from "@mui/icons-material/Delete";

type props = {
    mediaId: number
    mediaType: mediaType
    listID: number
}

export const ListItemActions: React.FC<props> = ({mediaId, mediaType, listID}: props) => {


    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const dispatch = useDispatch()


    const openField = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const closeField = () => {
        setAnchorEl(null);
    };
    const deleteItem = (listId: number, mediaId: number,) => {
        dispatch(deleteListItem(listId, mediaId))
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={closeField}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <AddCommentForm closeField={closeField} mediaId={mediaId} mediaType={mediaType} listId={listID}/>
            </Popover>
            <Tooltip sx={{mt: 1, mb: 1}} title="Edit comment" followCursor>
                <Button sx={{width: '200%'}} variant={'outlined'} onClick={openField}>
                    <EditIcon/>
                </Button>
            </Tooltip>
            <Tooltip sx={{mt: 1, mb: 1}} title="Delete" followCursor>
                <Button sx={{width: '200%', mt: 1}} color={'error'} variant={'outlined'}
                        onClick={() => deleteItem(listID, mediaId)}>
                    <DeleteIcon/>
                </Button>
            </Tooltip>
        </div>

    );
};

