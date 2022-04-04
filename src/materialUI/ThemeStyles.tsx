import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0c304d',
        },
    },
});