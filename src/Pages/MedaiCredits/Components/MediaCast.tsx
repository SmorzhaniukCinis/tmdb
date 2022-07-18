import React from 'react';
import s from "../MediaCredits.module.css";
import {Box} from "@mui/material";
import {getImage} from "../../../Common/functions/getImage";
import noPhoto from "../../../assets/noUserPhoto.png";
import {commonCastType} from "../../../API/movieAPI/movieTypes";

type props = {
    cast: commonCastType[] | undefined
}

export const MediaCast: React.FC<props> = ({cast}: props) => {
    return (
        <Box sx={{width:'50%'}}>
            <h5 className={s.title}>
                <span>Cast</span>
                <span className={s.itemCount}>({cast?.length})</span>
            </h5>
            {
                cast?.map(item =>
                    <Box sx={{p: 1, m: 1, display: 'flex'}}>
                        <img className={s.profilePhoto} width={100}
                             src={getImage('original', item.profile_path) || noPhoto} alt=""/>
                        <Box sx={{m: 2, display: 'flex', flexDirection: 'column'}}>
                            <span className={s.name}>
                                {item.name}
                            </span>
                            <span className={s.job}>
                                {item.character}
                            </span>
                        </Box>
                    </Box>)
            }
        </Box>
    );
};

