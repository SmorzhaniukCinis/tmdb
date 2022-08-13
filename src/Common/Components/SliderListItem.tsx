import React, {useEffect} from 'react';
import {getPopularMedia} from "../../store/mediaReducer";
import {useDispatch, useSelector} from "react-redux";
import {getPopularMediaSelector} from "../../store/Selectors/mediaSelectors";
import {SearchItem} from "../../Pages/SearchResult/Componnents/SearchItem";

export const SliderListItem = () => {

    const popular = useSelector(getPopularMediaSelector)

    return (
        <div>
            media Item
        </div>
    );
};