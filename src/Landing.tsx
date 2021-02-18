import React, { ReactElement } from 'react';
import logo from './background7.png';
import NavBar from './Components/LandingComponents/NavBar';
import Title from './Components/LandingComponents/Title';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Components/LandingComponents/Search';
import ViewAllCategories from './Components/LandingComponents/ViewAllCategories';

const useStyles = makeStyles(theme => ({
    photo: {
        paddingTop: '150px',
        marginLeft: '200px'
    },
}))

interface Props {
    
}


export default function Landing({}: Props): ReactElement {

    const classes = useStyles();
    
    return (
        <div>
            <NavBar />
            <Grid container alignItems="center" spacing={3}>
                <Grid item md={6} xs={12}>
                    <Title />
                    <Search />
                    <ViewAllCategories />
                </Grid>
                <Grid item md={6} xs={12}>
                    <img className = {classes.photo} src = {logo} alt = 'logo' />
                </Grid>
            </Grid>;
        </div>
    )
}
