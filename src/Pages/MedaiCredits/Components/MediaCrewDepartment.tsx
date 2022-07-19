import React from 'react';
import {commonCrewType} from "../../../API/movieAPI/movieTypes";
import {Box} from "@mui/material";
import s from "../MediaCredits.module.css";
import {getImage} from "../../../Common/functions/getImage";
import noPhoto from "../../../assets/noUserPhoto.png";

type props = {
    crew: commonCrewType[] | undefined
    title: string
}

export const MediaCrewDepartment: React.FC<props> = ({title, crew}: props) => {
    return (
        <div>
            <h6 className={s.departmentTitle}>{title}</h6>
            {
                crew?.map(item => {
                        if (item.department === title) {
                            return (
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
                                </Box>
                            )
                        }

                    }
                )
            }
        </div>
    );
};


