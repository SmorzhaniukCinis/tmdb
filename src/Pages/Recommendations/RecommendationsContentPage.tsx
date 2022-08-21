import {MediaSlider} from "../../Common/Components/MediaSlider/MediaSlider";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getPopularMediaSelector, getTopRatedMediaSelector} from "../../store/Selectors/mediaSelectors";
import {useEffect} from "react";
import {getPopularMedia, getTopRatedMedia} from "../../store/mediaReducer";
import {Loader} from "../../Common/Components/Loader";

export const RecommendationsContentPage = () => {

    const dispatch = useDispatch()
    const popular = useSelector(getPopularMediaSelector)
    const topRated = useSelector(getTopRatedMediaSelector)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        dispatch(getPopularMedia())
        dispatch(getTopRatedMedia())
    }, [dispatch])

if (isLoading) return <Loader/>
    return (
        <div>
            <MediaSlider title={'Popular TV Show'} content={popular.popularTV}/>
            <MediaSlider title={'Popular Movie'} content={popular.popularMovie}/>
            <MediaSlider title={'Top rated TV Show'} content={topRated.topRatedTV}/>
            <MediaSlider title={'Top rated Movie'} content={topRated.topRatedMovie}/>
        </div>
    );
};
