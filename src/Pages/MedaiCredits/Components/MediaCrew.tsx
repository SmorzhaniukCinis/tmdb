import React, {useEffect, useMemo, useState} from 'react';
import {commonCrewType} from "../../../API/movieAPI/movieTypes";
import {getImage} from "../../../Common/functions/getImage";
import noPhoto from '../../../assets/noUserPhoto.png'
import {Box} from "@mui/material";
import s from '../MediaCredits.module.css'
import {MediaCrewDepartment} from "./MediaCrewDepartment";

type props = {
    crew: commonCrewType[] | undefined
    goToPerson: (id:number) => void
}



export const MediaCrew: React.FC<props> = ({crew, goToPerson}: props) => {

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
            <h5 className={s.title}>Crew<span className={s.itemCount}>({crew?.length})</span></h5>
            {
                departments.map(i => <MediaCrewDepartment goToPerson={goToPerson} title={i} crew={crew}/>)
            }
        </Box>
    );
};


