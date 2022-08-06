import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {images} from "../../../API/PersoneAPI/PersonTypes";
import {getImage} from "../../../Common/functions/getImage";
import {Box, CircularProgress} from "@mui/material";
import {ImageModalWindow} from "../../../Common/Components/ImageModalWindow/ImageModalWindow";

type props = {
    images: images[]
}

export const PersonImageList: React.FC<props> = ({images}: props) => {

    const [open, setOpen] = React.useState(false);
    const [imageForModal, setImageForModal] = React.useState<string>('');

    const handleOpen = (img: string) => {
        setOpen(true)
        setImageForModal(img)
    }
    const handleClose = () => setOpen(false);

    return (
        <ImageList sx={{width: '100%'}} cols={4}>
            {!images ?
                <Box sx={{display: 'flex'}}>
                    <CircularProgress/>
                </Box>
                : images?.map((item) => (
                    <ImageListItem key={item.file_path}>
                        <img
                            onClick={() => handleOpen(item.file_path)}
                            src={`${getImage('original', item.file_path)}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${getImage('original', item.file_path)}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={'error'}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            <ImageModalWindow open={open} handleClose={handleClose} url={imageForModal}/>
        </ImageList>
    );
}

