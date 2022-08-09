import React, {useEffect} from 'react';
import {getPopularMedia} from "../../../store/mediaReducer";
import {useDispatch, useSelector} from "react-redux";
import {getPopularMediaSelector} from "../../../store/Selectors/mediaSelectors";

const BlockContent = () => {

    const dispatch = useDispatch()
    const popular = useSelector(getPopularMediaSelector)

    useEffect(() => {
        dispatch(getPopularMedia())
    }, [dispatch])

    return (
        <div>
            content
        </div>
    );
};

export default BlockContent;