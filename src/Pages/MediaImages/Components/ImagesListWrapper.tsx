import React from 'react';
import {ImagesList} from "./ImagesList";
import {mediaImagesType} from "../../../Common/types";
import {direction} from "../../MediaPage/Components/MediaImage";

type props = {
    imagesList: mediaImagesType,
    imageDirection: direction
}

export const ImagesListWrapper:React.FC<props> = ({imagesList, imageDirection}:props) => {

    switch (imageDirection) {
        case "backdrops":
            return <ImagesList imagesList={imagesList.backdrops} cols={4} size={32}/>
        case "logos":
            return <ImagesList imagesList={imagesList.logos} cols={2} size={20}/>
        case "posters":
            return <ImagesList imagesList={imagesList.posters} cols={3} size={15}/>
        default: return <div>no res</div>
    }
};

