import React, {useEffect} from 'react';
import {getOnAirTV} from "../../store/Selectors/tvSelectors";
import {useDispatch, useSelector} from "react-redux";
import {GetOnTheAirTVShow} from "../../store/TVReducer";

const TvShowsPage = () => {

    const onAirTVShow = useSelector(getOnAirTV)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetOnTheAirTVShow())
    }, [dispatch])

    console.log(onAirTVShow[0]?.name)
    return (
        <div>
            test 2
        </div>
    );
};

export default TvShowsPage;