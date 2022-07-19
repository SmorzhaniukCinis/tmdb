import React from 'react';
import s from "../MediaCredits.module.css";
import {getImage} from "../../../Common/functions/getImage";
import noPhoto from "../../../assets/noimage.jpg";
import {Box} from "@mui/material";
import {commonCastType, commonCrewType} from "../../../API/movieAPI/movieTypes";

type props = {
    goToPerson: (id: number) => void
    item: commonCrewType | commonCastType
    job: string
}

export const MediaCreditsItem: React.FC<props> = ({goToPerson, item, job}: props) => {
    return (
        <Box sx={{p: 1, m: 1, display: 'flex'}}>
            <img onClick={() => goToPerson(item.id)}
                 className={s.profilePhoto}
                 src={getImage('original', item.profile_path) || noPhoto}
                 alt="person photo"/>
            <Box sx={{m: 2, display: 'flex', flexDirection: 'column'}}>
                                        <span onClick={() => goToPerson(item.id)} className={s.name}>
                                            {item.name}
                                        </span>
                <span className={s.job}>
                                            {job}
                                        </span>
            </Box>
        </Box>
    );
};

