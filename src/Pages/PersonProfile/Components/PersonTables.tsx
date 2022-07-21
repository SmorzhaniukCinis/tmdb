import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {cast, crew} from "../../../API/PersoneAPI/PersonTypes";
import {PersonActingTable} from "./PersonActingTable";
import {PersonCrewTable} from "./PersonCrewTable";
import s from "../PersonPage.module.css";

type props = {
    combined_credits: {
        cast: cast[]
        crew: crew[]
    }
}

export const PersonTables: React.FC<props> = ({combined_credits}: props) => {
    return (
        <div>
            {combined_credits?.cast.length === 0 ? null
                : <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h5 className={s.title}>Acting</h5>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PersonActingTable cast={combined_credits?.cast}/>
                    </AccordionDetails>
                </Accordion>
            }
            {combined_credits?.crew.length === 0 ? null
                : <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h5 className={s.title}>Crew</h5>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PersonCrewTable crew={combined_credits?.crew}/>
                    </AccordionDetails>
                </Accordion>
            }
        </div>
    );
}
