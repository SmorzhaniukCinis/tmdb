import React, {useEffect, useState} from 'react';
import {direction, images} from "./MediaImage";
import {imageType} from "../../../API/movieAPI/movieTypes";
import s from "../mediaPage.module.css";
import {getImage} from "../../../Common/functions/getImage";
import {ImageModalWindow} from "../../../Common/Components/ImageModalWindow/ImageModalWindow";

type props = {
    direction: direction
    currentMediaImage: images | undefined
}

const MediaImageSlider: React.FC<props> = ({direction, currentMediaImage}: props) => {

    const [currentImages, setCurrentImage] = useState<imageType[]>()
    const [open, setOpen] = React.useState(false);
    const [imageForModal, setImageForModal] = React.useState<string>('');

    const handleOpen = (img: string) => {
        setOpen(true)
        setImageForModal(img)
    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        switch (direction) {
            case 'backdrops': {
                setCurrentImage(currentMediaImage?.backdrops)
                break
            }
            case 'posters': {
                setCurrentImage(currentMediaImage?.posters)
                break
            }
            case 'logos': {
                setCurrentImage(currentMediaImage?.logos)
                break
            }
            default:
                break
        }
    }, [currentMediaImage?.backdrops, currentMediaImage?.logos, currentMediaImage?.posters, direction])


    return (
        <div className={s.mediaImageSlider}>
            {currentImages && currentImages
                .slice(0, 10)
                .map((img, index) =>
                    <img className={s.mediaImageItem}
                         onClick={() => handleOpen(img.file_path)}
                         key={img.file_path}
                         src={getImage('original', img.file_path)}
                         alt="mediaPhoto"/>
                )}
            <ImageModalWindow handleClose={handleClose} open={open} url={imageForModal}/>
        </div>
    );
};

export default MediaImageSlider;