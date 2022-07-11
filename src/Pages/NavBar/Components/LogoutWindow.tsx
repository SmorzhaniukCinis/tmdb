import React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {Dialog} from "@mui/material";
import {TransitionProps} from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import {useDispatch} from "react-redux";
import {deleteSessionId} from "../../../store/authReducer";

type props = {
    open: boolean
    handleClose: () => void
}

export const LogoutWindow: React.FC<props> = ({open, handleClose}: props) => {

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    const dispatch = useDispatch()

    const Logout = () => {
        dispatch(deleteSessionId())
        handleClose()
    }
    const Back = () => {
        handleClose()
    }


    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Are you sure you want to logout?</DialogTitle>
            <DialogActions style={{display: "flex", justifyContent: 'space-around'}}>
                <Button onClick={Back}>Back</Button>
                <Button onClick={Logout}>Logout</Button>
            </DialogActions>
        </Dialog>
    );
};
