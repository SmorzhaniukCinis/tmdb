import React from 'react';
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchListIcon from "@mui/icons-material/AssignmentTurnedIn";
import GradingIcon from "@mui/icons-material/Grading";


type props = {
    markAsFavorite: () => void
    addToWatchListOnClick: () => void
    openListsMenu: () => void
    isVisible: boolean
}

export const ActionMenu: React.FC<props> = (props: props) => {

    return (
        <div>
            <SpeedDial
                hidden={!props.isVisible}
                ariaLabel="SpeedDial basic example"
                sx={{position: 'absolute', bottom: 8, right: 16}}
                icon={<SpeedDialIcon/>}
            >
                <SpeedDialAction
                    key={'Favorite'}
                    icon={<FavoriteIcon onClick={props.markAsFavorite}/>}
                    // @ts-ignore
                    tooltipTitle={'Add to favorite'}
                />
                <SpeedDialAction
                    key={'watchList'}
                    icon={<WatchListIcon onClick={props.addToWatchListOnClick}/>}
                    // @ts-ignore
                    tooltipTitle={'Add to WatchList'}
                />
                <SpeedDialAction
                    key={'addToList'}
                    icon={<GradingIcon onClick={props.openListsMenu}/>}
                    // @ts-ignore
                    tooltipTitle={'Add to list'}
                />
            </SpeedDial>


        </div>
    );
};

