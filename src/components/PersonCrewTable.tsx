import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { crew } from '../API/PersoneAPI/PersonTypes';
import {useNavigate} from "react-router-dom";
import s from '../styles/PersonPage.module.css'


type props = {
    crew: crew[]
}

export const PersonCrewTable: React.FC<props> = ({crew}: props) => {

    const navigate = useNavigate()

    return (
        <div>
            <h5 className={s.title}>Crew</h5>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="left">Position</TableCell>
                            <TableCell align="left">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {crew?.map((row,index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{cursor: 'pointer', fontWeight: 'bold'}}
                                           onClick={() => navigate(`/${row.media_type}/${row.id}`)}
                                           component="th"
                                           scope="row">
                                    {row.name || row.title}
                                </TableCell>
                                <TableCell align="left">{`${row.department || '-'}`}</TableCell>
                                <TableCell align="left">{row.first_air_date || row.release_date || '-'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
