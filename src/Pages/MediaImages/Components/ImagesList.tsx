import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {getImage} from "../../../Common/functions/getImage";
import s from '../MediaImages.module.css'
import {imageType} from "../../../API/movieAPI/movieTypes";
import {useEffect, useState} from "react";

type props = {
    imagesList: Array<imageType>
    cols: number
    size: number
}

export const ImagesList: React.FC<props> = ({imagesList, cols, size}: props) => {


    const [groupImageArr, setGroupImageArr] = useState<Array<imageType>[]>()

    useEffect(() => {
        if (imagesList) {
            setGroupImageArr(groupImage(imagesList, size))
        }
    }, [imagesList])


    return (
        <div>
            {groupImageArr
                ? <ImageList sx={{height: 700}} cols={cols}>
                    {groupImageArr[0].map(image =>
                        <ImageListItem key={image.file_path}>
                            <img
                                src={getImage('original', image.file_path)}
                                srcSet={getImage('original', image.file_path)}
                                alt={image.file_path}
                                loading="lazy"
                            />
                        </ImageListItem>)}
                </ImageList>
                : null}
        </div>
    );
}


const groupImage = (images: imageType[], size:number) => {
    let subarray = [];
    for (let i = 0; i < Math.ceil(images.length / size); i++) {
        subarray[i] = images.slice((i * size), (i * size) + size);
    }
    return subarray
}