import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { cast, crew } from '../API/PersoneAPI/PersonTypes';
import {useNavigate} from "react-router-dom";
import s from '../styles/PersonPage.module.css'


type props = {
    cast: cast[]
}

export const PersonActingTable: React.FC<props> = ({cast}: props) => {

    const navigate = useNavigate()

    return (
        <div>
            <h5 className={s.title}>Acting</h5>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="left">Character</TableCell>
                            <TableCell align="left">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cast?.map((row,index) => (
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
                                <TableCell align="left">{`as ${row.character || '-'}`}</TableCell>
                                <TableCell align="left">{row.first_air_date || row.release_date || '-'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
