import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import {Link, useNavigate} from "react-router-dom";

export const NawMenu = () => {

    const navigate = useNavigate()

    return (
        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Button
                onClick={()=> navigate('/')}
                sx={{my: 2, color: 'inherit', display: 'block'}}
            >
                   Home
            </Button>
        </Box>
    )
}
