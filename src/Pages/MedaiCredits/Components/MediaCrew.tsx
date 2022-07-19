import React, {useEffect, useMemo, useState} from 'react';
import {commonCrewType} from "../../../API/movieAPI/movieTypes";
import {getImage} from "../../../Common/functions/getImage";
import noPhoto from '../../../assets/noUserPhoto.png'
import {Box} from "@mui/material";
import s from '../MediaCredits.module.css'

type props = {
    crew: commonCrewType[] | undefined
}



export const MediaCrew: React.FC<props> = ({crew}: props) => {

    const temporaryDepartments:string[] = useMemo(()=> {return []},[])
    const [departments, setDepartments] = useState<string[]>([])

    useEffect(() => {
        (crew?.forEach(i => {
            if (temporaryDepartments.length === 0 || temporaryDepartments.every(el => el !== i.department)) {
                temporaryDepartments.push(i.department)
            }
        }))
        setDepartments(temporaryDepartments)
    }, [crew, temporaryDepartments])

    return (
        <Box sx={{width: '50%'}}>
            {
                departments.map(i => <p>{i}</p>)
            }
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


