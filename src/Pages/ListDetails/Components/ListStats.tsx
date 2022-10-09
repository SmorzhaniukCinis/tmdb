import React from 'react';
import s from "../../MyLists/ListDescription.module.css";
import {Box, Paper} from "@mui/material";
import {useSelector} from "react-redux";
import {getList} from "../../../store/Selectors/listSelectors";
import {getParseRevenue, parseTime} from "../listDetailsFunctions";



const ListStats = () => {

    const listDetails = useSelector(getList)
    const {hour, minute} = parseTime(listDetails?.runtime)
    const {parseRevenue, char} = getParseRevenue(listDetails?.revenue)

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
                <p className={s.statisticValue}>{`${hour}H ${minute}M`}</p>
                <p className={s.statisticDescription}>Total runtime</p>
            </Box>
            <Box>
                <p className={s.statisticValue}>{`$${parseRevenue}${char}`}</p>
                <p className={s.statisticDescription}>Total revenue</p>
            </Box>
        </Paper>
    );
};



export default ListStats;