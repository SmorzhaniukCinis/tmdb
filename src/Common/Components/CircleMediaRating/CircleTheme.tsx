import {createTheme} from "@mui/material";

export const ratingColor = createTheme({
    palette: {
        ratingColor: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});
declare module '@mui/material/styles' {
    interface Palette {
        ratingColor: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        ratingColor?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        ratingColor: true;
    }
}