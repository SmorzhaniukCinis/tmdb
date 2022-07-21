import React from 'react';
import {commonCrewType} from "../../../API/movieAPI/movieTypes";
import s from "../MediaCredits.module.css";
import {MediaCreditsItem} from "./MediaCreditsItem";

type props = {
    crew: commonCrewType[] | undefined
    title: string
    goToPerson: (id:number) => void
}

export const MediaCrewDepartment: React.FC<props> = ({title, crew, goToPerson}: props) => {
    return (
        <div>
            <h6 className={s.departmentTitle}>{title}</h6>
            {crew?.map((item,index) => {
                        if (item.department === title) {
                            return (
                                <MediaCreditsItem key={index} job={item.job} goToPerson={goToPerson} item={item}/>
                            )
                        }

                    }
                )}
        </div>
    );
};


