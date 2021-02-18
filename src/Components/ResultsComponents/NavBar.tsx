import React, { ReactElement } from 'react';
import avatar from '../../FavImg1.png';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid} from '@material-ui/core';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,  
        },
        row:{
            flexGrow:1
        },
        AppBar:{
            backgroundColor:"#ffddf4",
            backgroundSize:"cover"
        },
        grow:{
            flexGrow:1
        },
        buttonFontSize:{
            background:"#861388",
            margin:"auto",
            fontSize:"12px",
            color:"#fff",
            borderRadius:"25px",
            padding:"2px 25px",
            marginRight: '15px',
            '&:hover':{
                background: '#28C2FF',
                boxShadow: "0px 2px 10px #888888"
            },
        },
        container:{
            width:1600,
            margin:"auto"
        },
        loginButton:{
            background:"#861388",
            margin:"auto",
            fontSize:"12px",
            color:"#fff",
            borderRadius:"25px",
            padding:"2px 25px",
            '&:hover':{
                background: '#28C2FF',
                boxShadow: "0px 2px 10px #888888"
            }
        },
        logo: {
            maxWidth: 70,
        },
    }),
);

export default function NavBar({}: Props): ReactElement {
    
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" className={classes.AppBar}>
                    <Grid item sm={12} xs={12} className={classes.container}>
                        <Toolbar variant="dense">
                            <Grid className={classes.grow}>
                                <img src = {avatar} alt="logo" className={classes.logo} />
                            </Grid>
                            <Link to = '/favourites'>
                                <Button color="inherit" className={classes.buttonFontSize}>Favourites</Button>
                            </Link>
                            <Link to = '/'>
                                <Button color="inherit" className={classes.loginButton}>Home</Button>
                            </Link>   
                        </Toolbar>
                    </Grid>
                </AppBar>
            </div>
        </div>
    )
}