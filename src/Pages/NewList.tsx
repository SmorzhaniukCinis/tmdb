import React from 'react';
import {Outlet} from "react-router-dom";

const NewList = () => {
    return (
        <div>
            <p>newLsist</p>
            <main>
                <Outlet />
            </main>

        </div>
    );
};

export default NewList;