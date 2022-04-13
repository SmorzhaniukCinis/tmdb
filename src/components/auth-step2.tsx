import React from 'react';
import {useSelector} from "react-redux";
import {getRequestToken} from "../store/Selectors/authSelectors";
import s from '../styles/auth.module.css'
import {Button, Link} from "@mui/material";

export const Step2 = () => {

    const token = useSelector(getRequestToken)

    return (
        <div>
            <h4 className={s.PermissionText}>Give your permission to read and write data on your behalf.</h4>
            <div className={s.PermissionLinkBox}>
                <Button  variant="outlined">
                    <Link className={s.Link} underline={"hover"}
                          href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/authentication`}
                          color="inherit">
                        Go to TMDB permission page
                    </Link>
                </Button>
            </div>
        </div>
    );
};
