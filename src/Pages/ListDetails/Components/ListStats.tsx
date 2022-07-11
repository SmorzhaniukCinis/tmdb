import React from 'react';
import s from "../../MyLists/ListDescription.module.css";
import {Box, Paper} from "@mui/material";
import {useSelector} from "react-redux";
import {getList} from "../../../store/Selectors/listSelectors";

const ListStats = () => {

    const listDetails = useSelector(getList)

    return (
        <Paper elevation={7} className={s.statisticBlock}>
            <Box>
                <p className={s.statisticValue}>{listDetails?.total_results}</p>
                <p className={s.statisticDescription}>Items on this list</p>
            </Box>
            <Box>
                <p className={s.statisticValue}>{Math.floor(listDetails?.average_rating*10)}%</p>
                <p className={s.statisticDescription}>Average rating</p>
            </Box>
            <Box>
                <p className={s.statisticValue}>{listDetails?.runtime}min.</p>
                <p className={s.statisticDescription}>Total runtime</p>
            </Box>
            <Box>
                <p className={s.statisticValue}>{Math.floor(Number(listDetails?.revenue)/100)} k$</p>
                <p className={s.statisticDescription}>Total revenue</p>
            </Box>
        </Paper>
    );
};

export default ListStats;