import React, { ReactElement } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from 'react-router-dom';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                marginLeft: '120px',
                marginTop: '30px',
                background: 'transparent',
                border: 0,
                textTransform: 'capitalize',
                fontSize: '17px',
                fontWeight: 900
            },
        },
    }),
);

export default function ViewAllCategories({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div>
            <Link to = '/favourites'>
                <div className={classes.root}>
                    <Button>Check your favourite images&nbsp; <ArrowForwardIcon /></Button>
                </div>
            </Link>   
        </div>
    )
}
