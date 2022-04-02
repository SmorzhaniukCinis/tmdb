import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

export const NawMenu = () => {
    return (
        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Button
                sx={{my: 2, color: 'white', display: 'block'}}
            >
                home
            </Button>
        </Box>
    )
}
