import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getDetails} from "../store/Selectors/accountSelectors";
import {Avatar} from "@mui/material";

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

const NavBar = () => {

    const details = useSelector(getDetails)

    const getImage = (size:string, path:string|null) => {
        if (path != null) {
            return `https://image.tmdb.org/t/p/${size + path}`
        } else return undefined
    }
    const imageURL = getImage('w200',details.avatar.tmdb.avatar_path)




    return (
        <div style={{display: 'flex', justifyContent: 'space-around', width: 200}}>
            <div>
                <Link to={'/'}>home  </Link>
            </div>
            <div>
                <Link to={'/profile'}>profile  </Link>
            </div>
            {imageURL
                ? <Avatar src={imageURL} />
                : details.name
                    ? <Avatar {...stringAvatar(details.name)} />
                    : <Avatar src={undefined} /> }

        </div>
    );
};

export default NavBar;