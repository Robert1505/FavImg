import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title:{
            fontSize: '70px',
            marginTop: '200px',
            marginLeft: '120px'
        },
        subtitle:{
            fontSize: '17px',
            marginTop: '25px',
            marginLeft: '120px'
        }
    }),
);

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Carter One',
            'sans-serif',
        ].join(','),
    },});

export default function Title({}: Props): ReactElement {

    const classes = useStyles();

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Typography className = {classes.title}>
                    Find your favourite images!
                </Typography>
                <Typography className = {classes.subtitle}>
                    FavImg is a website where you can find your favourite images and use them for free! &nbsp; Choose your favourite photos and join us! &nbsp; To save your favourite photos please login! &nbsp; Thank you!
                </Typography>
            </ThemeProvider>
        </div>
    )
}
