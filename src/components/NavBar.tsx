import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {ProfileMenu} from "./ProfileMenu";
import {NawMenu} from "./NavMenu";


interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


export const NavBar = (props: { window?: () => Window }) => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <HideOnScroll {...props}>
                    <AppBar>
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                                >
                                    TMDB
                                </Typography>
                                <NawMenu/>
                                <ProfileMenu/>
                            </Toolbar>
                        </Container>
                    </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </React.Fragment>
    );
}


