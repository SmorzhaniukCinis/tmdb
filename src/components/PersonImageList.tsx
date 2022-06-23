import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {images} from "../API/PersoneAPI/PersonTypes";
import {getImage} from "../Common/getImage";
import {Box, CircularProgress} from "@mui/material";

type props = {
    images: images[]
}

export const PersonImageList: React.FC<props> = ({images}: props) => {
    return (
        <ImageList sx={{width: '100%'}} cols={4} >
            {!images ?
                <Box sx={{display: 'flex'}}>
                    <CircularProgress/>
                </Box>
                : images?.map((item) => (
                    <ImageListItem key={item.file_path}>
                        <img
                            src={`${getImage('original', item.file_path)}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${getImage('original', item.file_path)}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={'error'}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
        </ImageList>
    );
}

