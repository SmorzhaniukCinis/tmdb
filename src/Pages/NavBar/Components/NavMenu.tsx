import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import {Link, useNavigate} from "react-router-dom";

export const NawMenu = () => {

    const navigate = useNavigate()
    const navButton = {
        my: 2,
        mr: 1,
        color: 'inherit',
        display: 'block'
    }

    return (
        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Button onClick={()=> navigate('/')} sx={navButton}>
                   Home
            </Button>
            <Button onClick={()=> navigate('/movies')} sx={navButton}>
                   Movies
            </Button>
            <Button onClick={()=> navigate('/tvShow')} sx={navButton}>
                   TV Shows
            </Button>
            <Button onClick={()=> navigate('/peoples')} sx={navButton}>
                   People
            </Button>
        </Box>
    )
}

