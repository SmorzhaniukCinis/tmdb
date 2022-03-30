import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', width: 200}}>
            <div>
                <Link to={'/'}>home  </Link>
            </div>
            <div>
                <Link to={'/profile'}>profile  </Link>
            </div>
        </div>
    );
};

export default NavBar;