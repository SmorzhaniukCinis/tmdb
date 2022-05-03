import React from 'react';
import {getImage} from "../Common/getImage";
import {Box, Card, CardContent, Typography} from "@mui/material";
import s from "../styles/ProfileListWrapper.module.css";
import {useSelector} from "react-redux";
import {getIsDarkTheme} from "../store/Selectors/accountSelectors";
import {Rating, SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/lab";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';

type props = {
    originalTitle: string
    releaseDate: string
    overview: string
    backdropPath: string | null
    language: string
    posterPath: string | null
    voteAverage: number
    voteCount: number
    rating: number | undefined
}

const actions = [
    { icon: <FavoriteIcon />, name: 'Share' },
    { icon: <AssignmentTurnedInIcon />, name: 'test' },
];
export const FavoriteCard: React.FC<props> = (props: props) => {

    const isDarkTheme = useSelector(getIsDarkTheme)




    return (
        <Card variant={'outlined'} sx={{minWidth: '500px', height: '345px', m: 1}}>
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <div style={{
                background: `url(${getImage('original', props.backdropPath)})`,
                backgroundSize: '100%'
            }}>
                <CardContent className={isDarkTheme ? s.blackCardWrapper : s.witheCardWrapper}>
                    <div>
                        <img height={'300px'} src={getImage('w200', props.posterPath)} alt=""/>
                    </div>
                    <div>
                        <Typography variant="h4" component="div">
                            {props.originalTitle}
                        </Typography>
                        <Typography>
                            {props.releaseDate}&nbsp;
                            <span className={s.language}>({props.language})</span>
                        </Typography>
                        {
                            props.rating
                                ?<Typography>
                                    <Rating name="half-rating" defaultValue={props.rating / 2} precision={0.5}/>
                                </Typography>
                                : null
                        }
                        <Typography sx={{mb: 1.5}} textOverflow={'test'}>
                            Users score:&nbsp;
                            <abbr title={`Votes: ${props.voteCount}`}>
                                <span className={s.voteAverage}>{props.voteAverage}</span>
                            </abbr>
                        </Typography>
                        <Typography sx={{width: '60%'}} variant="body2">
                            {props.overview}
                        </Typography>
                    </div>
                </CardContent>
            </div>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            // @ts-ignore
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </Card>
    );
};
