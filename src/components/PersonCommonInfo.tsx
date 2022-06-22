import React from 'react';
import s from "../styles/PersonPage.module.css";
import {getImage} from "../Common/getImage";
import {getGender} from "../Common/getGender";
import {personDetails} from "../API/PersoneAPI/PersonTypes";
import moment from "moment";
import {PersonCommonInfoItem} from "./PersonCommonInfoItem";

type props = {
    personDetails: personDetails
}

const PersonCommonInfo:React.FC<props> = ({personDetails}:props) => {

    const getBirthday = (time:string | null) => {
        if(time) {
            const years = moment(time).fromNow().split(' ')
            const date = moment(time).format('MMM Do YYYY')
            return `${date}(${years[0]} ${years[1]} old)`
        }
        return 'No info'
    }


    return (
        <div>
            <img className={s.profileImage} src={getImage('original', personDetails.profile_path)}
                 alt="profilePhoto"/>
            <div>
                <div>

                </div>
                <h6 className={s.title}>Personal info</h6>
                <div>
                    <PersonCommonInfoItem content={personDetails.known_for_department} title={'Know For'}/>
                    <PersonCommonInfoItem content={String(personDetails.combined_credits?.cast.length)}
                                          title={'Know Credits'}/>
                    <PersonCommonInfoItem content={getGender(personDetails.gender)} title={'Gender'}/>
                    <PersonCommonInfoItem content={getBirthday(personDetails.birthday)} title={'Birthday'}/>
                    <PersonCommonInfoItem content={personDetails.also_known_as} title={'Also Know As'}/>
                </div>
            </div>
        </div>
    );
};

export default PersonCommonInfo;