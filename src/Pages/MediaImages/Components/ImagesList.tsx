import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {getImage} from "../../../Common/functions/getImage";
import s from '../MediaImages.module.css'
import {imageType} from "../../../API/movieAPI/movieTypes";
import {ImageModalWindow} from "../../../Common/Components/ImageModalWindow/ImageModalWindow";

type props = {
    imagesList: Array<imageType>
    cols: number
}

export const ImagesList: React.FC<props> = ({imagesList, cols}: props) => {

    const [open, setOpen] = React.useState(false);
    const [imageForModal, setImageForModal] = React.useState<string>('');

    const handleOpen = (img: string) => {
        setOpen(true)
        setImageForModal(img)
    }
    const handleClose = () => setOpen(false);

    return (
        <div>
            {imagesList?.length
                ? <div>
                    <ImageList sx={{p: 1, maxWidth: '100%'}} cols={cols}>
                        {imagesList.map(image =>
                            <ImageListItem key={image.file_path}>
                                <img
                                    onClick={() => handleOpen(image.file_path)}
                                    className={cols === 2 ? s.borderForLogos : s.defaultImage}
                                    src={getImage('original', image.file_path)}
                                    srcSet={getImage('original', image.file_path)}
                                    alt={getImage('original', image.file_path)}
                                    loading="lazy"
                                />
                            </ImageListItem>)}

                    </ImageList>
                    <ImageModalWindow open={open} handleClose={handleClose} url={imageForModal}/>
                </div>
                : <div className={s.noResult}>No images</div>}
        </div>
    );
}

