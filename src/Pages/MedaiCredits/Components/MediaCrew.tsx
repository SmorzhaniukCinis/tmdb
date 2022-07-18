import React from 'react';
import {commonCrewType} from "../../../API/movieAPI/movieTypes";
import {getImage} from "../../../Common/functions/getImage";
import noPhoto from '../../../assets/noUserPhoto.png'
import {Box, Typography} from "@mui/material";
import s from '../MediaCredits.module.css'

type props = {
    crew: commonCrewType[] | undefined
}

export const MediaCrew: React.FC<props> = ({crew}: props) => {
    return (
        <Box sx={{width:'50%'}}>
            <h5 className={s.title}>Crew<span className={s.itemCount}>({crew?.length})</span></h5>
            {
                crew?.map(item =>
                    <Box sx={{p: 1, m: 1, display: 'flex'}}>
                        <img className={s.profilePhoto} width={100}
                             src={getImage('original', item.profile_path) || noPhoto} alt=""/>
                        <Box sx={{m: 2, display: 'flex', flexDirection: 'column'}}>
                            <span className={s.name}>
                                {item.name}
                            </span>
                            <span className={s.job}>
                                {item.job}
                            </span>
                        </Box>
                    </Box>)
            }
        </Box>
    );
};

