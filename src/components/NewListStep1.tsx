import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {ToggleButton, ToggleButtonGroup} from "@mui/lab";
import s from '../styles/newList.module.css'

const NewListStep1 = () => {

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };


    return (
        <div className={s.step1Wrapper}>
            <TextField sx={{width:'100%', marginBottom: '10px'}} id="outlined-basic" label="Name of list"  />
            <TextField
                sx={{width:'150%', marginBottom: '10px'}}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
            />
            <div>
                <Typography>
                    Public list?
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value={true}>Yas</ToggleButton>
                    <ToggleButton value={false}>No</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <Button variant={'outlined'} sx={{marginTop:'20px'}}>
                Next step
            </Button>
        </div>
    );
};

export default NewListStep1;