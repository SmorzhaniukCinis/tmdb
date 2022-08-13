import {SectionMediaSlider} from "../../Common/Components/SectionMediaSlider";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getPopularMediaSelector} from "../../store/Selectors/mediaSelectors";
import {useEffect} from "react";
import {getPopularMedia} from "../../store/mediaReducer";
import {Loader} from "../../Common/Components/Loader";

export const PopularContentPage = () => {

    const dispatch = useDispatch()
    const popular = useSelector(getPopularMediaSelector)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        dispatch(getPopularMedia())
    }, [dispatch])

if (isLoading) return <Loader/>
    return (
        <div>
            <SectionMediaSlider title={'Popular TVShow'} content={popular.popularMovie}/>
            <SectionMediaSlider title={'Popular Movie'} content={popular.popularMovie}/>
        </div>
    );
};
