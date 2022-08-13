import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {CircleMediaRating} from "./CircleMediaRating";
import {getImage} from "../functions/getImage";
import {mediaCardType} from "../types";

type props = {
    media: mediaCardType
}

export const SliderListItem:React.FC<props> = ({media}:props) => {


    return (
        <div style={{width: '250px'}}>
            <img width={200} src={getImage('original', media.posterPath)} alt=""/>
            media Item
            <CircleMediaRating/>
        </div>
    );
};