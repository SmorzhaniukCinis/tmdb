import React, {useState} from 'react';
import s from "../PersonPage.module.css";
import {personDetails} from "../../../API/PersoneAPI/PersonTypes";
import {PersonActingTable} from "./PersonActingTable";
import {PersonCrewTable} from "./PersonCrewTable";
import {PersonTables} from "./PersonTables";

type props = {
    personDetails: personDetails
}

export const PersonProfessionInfo: React.FC<props> = ({personDetails}: props) => {

    const [isBiographyOpen, setIsBiographyOpen] = useState(false)

    const showMore = () => {
        setIsBiographyOpen(true)
    }

    return (
        <div>
            <h5 className={s.name}>{personDetails.name}</h5>
            <h6 className={s.title}>Biography</h6>
            {personDetails.biography?.length > 900 && !isBiographyOpen
                ? <p className={s.biography}>
                    {personDetails.biography.substring(0, 900).concat('...')}
                    <span className={s.showBiography} onClick={showMore}>show more</span>
                </p>
                : <p className={s.biography}>{personDetails.biography}</p>}
            <PersonTables combined_credits={personDetails.combined_credits}/>
        </div>
    );
};

