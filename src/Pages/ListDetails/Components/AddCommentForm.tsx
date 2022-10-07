import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {addComment} from "../../../store/listReducer";
import {useDispatch, useSelector} from "react-redux";
import {mediaType} from "../../../Common/types";
import {getList} from "../../../store/Selectors/listSelectors";

type Inputs = {
    comment: string,
};
type props = {
    mediaId: number
    mediaType: mediaType
    listId: number
    closeField: () => void
}

export const AddCommentForm: React.FC<props> = ({mediaId, mediaType, listId, closeField}: props) => {

    const {register, handleSubmit} = useForm<Inputs>();
    const dispatch = useDispatch()
    const {comments} = useSelector(getList)

    const onSubmit: SubmitHandler<Inputs> = ({comment}) => {
        console.log(comment)
        submitComment(listId, mediaId, mediaType, comment)
    }
    const submitComment = (listId: number, mediaId: number, mediaType: mediaType, comment: string) => {
        dispatch(addComment(listId, mediaType, mediaId, comment))
        closeField()
    }
    const deleteComment = (listId: number, mediaId: number, mediaType: mediaType) => {
        dispatch(addComment(listId, mediaType, mediaId, ''))
        closeField()
    }

    return (
        <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField defaultValue={
                    comments[`movie:${mediaId}`]
                    || comments[`tv:${mediaId}`]
                    || ''
                } {...register("comment")} sx={{pb: 1}} id="outlined-basic" label="Comment"
                           variant="standard"/>
                <div>
                    <Button type='submit' variant={'outlined'} color={'success'}
                            sx={{width: '48%', mr: '4%'}}>Add</Button>
                    <Button onClick={() => deleteComment(listId, mediaId, mediaType)} variant={'outlined'}
                            color={'error'} sx={{width: '48%'}}>Clean</Button>
                </div>
                <Button onClick={closeField} sx={{mt: 1, width: '100%'}} variant={'outlined'}>Cancel</Button>
            </form>
        </Box>
    );
};

