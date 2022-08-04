import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {getImage} from "../../../Common/functions/getImage";
import s from '../MediaImages.module.css'
import {imageType} from "../../../API/movieAPI/movieTypes";

type props = {
    imagesList: Array<imageType>
    cols: number
}

export const ImagesList: React.FC<props> = ({imagesList, cols}: props) => {


    return (
        <div>
            {imagesList
                ? <ImageList sx={{p: 1, maxWidth: '100%'}} cols={cols}>
                    {imagesList.map(image =>
                        <ImageListItem key={image.file_path}>
                                <img
                                    className={cols === 2 && s.borderForLogos}
                                    src={getImage('original', image.file_path)}
                                    srcSet={getImage('original', image.file_path)}
                                    alt={getImage('original', image.file_path)}
                                    loading="lazy"
                                />
                        </ImageListItem>)}

                </ImageList>
                : <div className={s.noResult}>No images</div>}
        </div>
    );
}

