import React from 'react';
import {useSelector} from "react-redux";
import {getCurrentMedia, getIsLoading} from "../../../store/Selectors/discoverMediaSelectors";
import {SliderListItem} from "../../../Common/Components/SliderListItem/SliderListItem";
import s from '../MediaListPage.module.css'
import {Pagination, Skeleton} from "@mui/material";
import {createArray} from "../MediaListFunc";

interface TabPanelProps {
    index: number;
    value: number;
}

export const ContentTab = (props: TabPanelProps) => {

    const {value, index} = props;
    const currentMedia = useSelector(getCurrentMedia)
    const isLoading = useSelector(getIsLoading)
    const arrForSkeleton = createArray(20)

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
        >
            {value === index && (
                <div className={s.contentWrapper}>
                    {!isLoading
                        ?currentMedia.results?.map(media => <SliderListItem key={media.id} media={media}/>)
                        :arrForSkeleton.map(item => <Skeleton sx={{m:'3px', borderRadius: '5px'}} variant="rectangular" width={240} height={433} /> )
                    }
                </div>
            )}
            <div className={s.pagination}>
                <Pagination count={10} />
            </div>
        </div>
    );
}

export default ContentTab;