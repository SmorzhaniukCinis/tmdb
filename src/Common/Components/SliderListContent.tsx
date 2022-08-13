import React, {useEffect} from 'react';
import {SliderListItem} from "./SliderListItem";
import {useDispatch, useSelector} from "react-redux";
import {getPopularMediaSelector} from "../../store/Selectors/mediaSelectors";
import {getPopularMedia} from "../../store/mediaReducer";
import {mediaCardType} from "../types";

type props = {
    content: mediaCardType[]
}

export const SliderListContent:React.FC<props> = ({content}: props) => {

    return (
        <div>
            {
                content.map( item => <SliderListItem key={item.id}/>)
            }
        </div>
    );
};

