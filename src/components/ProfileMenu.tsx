import {useDispatch, useSelector} from "react-redux";
import {getDetails, getIsDarkTheme} from "../store/Selectors/accountSelectors";
import {getSessionId} from "../store/Selectors/authSelectors";
import React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {MaterialUISwitch} from "../materialUI/switchButtonStyle";
import {accountActions} from "../store/accountReducer";
import {LogoutWindow} from "./LogoutWindow";


function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}


export const ProfileMenu = () => {

    const details = useSelector(getDetails)
    const sessionId = useSelector(getSessionId)
    const isDarkTheme = useSelector(getIsDarkTheme)
    const dispatch = useDispatch()

    const getImage = (size: string, path: string | null) => {
        if (path != null) {
            return `https://image.tmdb.org/t/p/${size + path}`
        } else return undefined
    }

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const imageURL = getImage('w200', details.avatar.tmdb.avatar_path)

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function changeTheme(e: any) {
        dispatch(accountActions.setDarkTheme(!isDarkTheme))
    }


//logic for login window
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    {imageURL
                        ? <Avatar src={imageURL}/>
                        : details.name
                            ? <Avatar {...stringAvatar(details.name)} />
                            : <Avatar src={undefined}/>}

                </IconButton>
            </Tooltip>
            <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {sessionId
                    ? <div>
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Link to={'/account'} style={{color: 'inherit', textDecorationLine: 'none'}}>
                                <Typography textAlign="center">Profile</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUserMenu}>
                                <span onClick={handleClickOpen} style={{color: 'inherit', textDecorationLine: 'none'}}>
                                    <Typography textAlign="center">Logout</Typography>
                                </span>
                        </MenuItem>

                    </div>
                    : <div>
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Link style={{color: 'inherit', textDecorationLine: 'none'}} to={'/authentication'}>
                                <Typography textAlign="center">Login</Typography>
                            </Link>
                        </MenuItem>
                    </div>
                }
                <MenuItem>
                    <MaterialUISwitch sx={{m: 1}} value={isDarkTheme} onClick={changeTheme}/>
                </MenuItem>
            </Menu>

            {open ? <LogoutWindow open={open} handleClose={handleClose}/> : null}

        </Box>
    )
}