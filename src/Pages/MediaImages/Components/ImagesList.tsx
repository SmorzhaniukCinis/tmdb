import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {mediaImagesType} from "../../../Common/types";
import {direction} from "../../MediaPage/Components/MediaImage";
import {getImage} from "../../../Common/functions/getImage";
import s from '../MediaImages.module.css'

type props = {
    imagesList: mediaImagesType,
    imageDirection: direction
}

export const ImagesList:React.FC<props> = ({imagesList}:props) =>  {
    return (
        <ImageList sx={{height: 450 }} cols={3} rowHeight={164}>
            {imagesList.posters?.map((image) => (
                <ImageListItem key={image.file_path}>
                    <img
                        src={getImage('original', image.file_path)}
                        srcSet={getImage('original', image.file_path)}
                        alt={'vadf'}
                        loading="lazy"
                    />
                </ImageListItem>
            )) && <span className={s.noResult}>No Result</span>}
        </ImageList>
    );
}
