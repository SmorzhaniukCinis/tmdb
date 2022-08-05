import * as React from 'react';
import Modal from '@mui/material/Modal';
import {Paper} from "@mui/material";
import {getImage} from "../../functions/getImage";
import s from './ImageModalWindow.module.css'

type props = {
    handleClose: () => void
    open: boolean
    url: string

}

export const ImageModalWindow: React.FC<props> = ({open, handleClose, url}: props) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper sx={style}>
                    <img className={s.image} src={getImage('original', url)} alt=""/>
                </Paper>
            </Modal>
        </div>
    );
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
};
