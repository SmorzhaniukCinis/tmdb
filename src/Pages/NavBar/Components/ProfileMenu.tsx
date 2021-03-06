import {useDispatch, useSelector} from "react-redux";
import {getDetails, getIsDarkTheme} from "../../../store/Selectors/accountSelectors";
import {getIsAuth, getSessionId} from "../../../store/Selectors/authSelectors";
import React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {MaterialUISwitch} from "../../../materialUI/switchButtonStyle";
import {accountActions} from "../../../store/accountReducer";
import {LogoutWindow} from "./LogoutWindow";
import {getImage} from "../../../Common/functions/getImage";


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
    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch()

    const profileImageURL = getImage('w200', details.avatar.tmdb.avatar_path)

//logic for profile menu
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function changeTheme() {
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
                    {isAuth || profileImageURL
                        ? <Avatar src={profileImageURL}/>
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
                        <Link to={'/account'} style={{color: 'inherit', textDecorationLine: 'none'}}>
                            <MenuItem onClick={handleCloseUserMenu}>

                                <Typography textAlign="center">
                                    {details.name}<br/>
                                    <span style={{fontSize: '10px', opacity: '70%'}}>View profile</span>
                                </Typography>

                            </MenuItem>
                        </Link>
                        <hr style={{width: '90%', margin: '0px 6px 0 6px'}}/>
                        <Link to={'/myLists'} style={{color: 'inherit', textDecorationLine: 'none'}}>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Lists</Typography>
                            </MenuItem>
                        </Link>
                        <Link to={'/favorite'} style={{color: 'inherit', textDecorationLine: 'none'}}>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Favorite</Typography>
                            </MenuItem>
                        </Link>
                        <Link to={'/ratings'} style={{color: 'inherit', textDecorationLine: 'none'}}>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Ratings</Typography>
                            </MenuItem>
                        </Link>
                        <Link to={'/watchList'} style={{color: 'inherit', textDecorationLine: 'none'}}>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Watchlist</Typography>
                            </MenuItem>
                        </Link>
                        <hr style={{width: '90%', margin: '0px 6px 0 6px'}}/>
                        <MenuItem onClick={handleCloseUserMenu}>
                                <span onClick={handleClickOpen}
                                      style={{width: '100%', color: 'inherit', textDecorationLine: 'none'}}>
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