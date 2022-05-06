import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useDispatch} from "react-redux";
import {getCreatedList} from "../store/accountReducer";
import {CommonResType, createdList} from "../API/accountAPI/accountTypes";
import {addListItem} from "../store/listReducer";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
};

type props = {
    isOpen: boolean
    setOpen: (isOpen: boolean) => void
    lists: CommonResType<createdList>
    mediaId: number
}

export const ListMenu: React.FC<props> = ({isOpen, setOpen, lists, mediaId}: props) => {


    const dispatch = useDispatch()


    const closeListsMenu = () => setOpen(false);


    const addToList = (listId: number, itemId: number) => {
        dispatch(addListItem(listId, itemId))
        setOpen(false)
    }

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={closeListsMenu}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {lists.results.map(list =>
                        <Button
                            onClick={() => addToList(list.id, mediaId)}
                            sx={{marginBottom: '7px'}} variant={'outlined'} key={list.id}>
                            {list.name}
                        </Button>)}

                </Box>
            </Modal>
        </div>
    );
}