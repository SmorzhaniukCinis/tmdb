import React from 'react';
import {direction} from "../../Pages/MediaPage/Components/MediaImage";
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

type props = {
    imageDirection: string
    setImageDirection: (direction: direction) => void

}

const ImageDirectionsToggle:React.FC<props> = ({imageDirection, setImageDirection}:props) => {

    const changeDirection = (event: React.MouseEvent<HTMLElement>, direction: direction,) => {
        if(direction)
            setImageDirection(direction);

    };
    return (
        <div>
            <ToggleButtonGroup
                color="primary"
                value={imageDirection}
                exclusive
                onChange={changeDirection}
            >
                <ToggleButton value="backdrops">Backdrops</ToggleButton>
                <ToggleButton value="logos">Logos</ToggleButton>
                <ToggleButton value="posters">Posters</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default ImageDirectionsToggle;