import React, { ReactElement, useState } from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {createApi} from "unsplash-js";
import {useDispatch} from 'react-redux';
import {setImages} from '../../actions';
import {useHistory} from 'react-router';
import { api } from '../../App';


interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            marginTop: '50px',
            marginBottom: '50px',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            // marginRight: theme.spacing(2),
            marginLeft: '120px',
            marginRight: '120px',
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherited',
            width: '100%',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '100%',
            },
        },
    }),
);

export default function SearchBar({}: Props): ReactElement {

    const classes = useStyles();

    const dispatch = useDispatch();

    const history = useHistory();

    const [inputValue, setInputValue] = useState('');


    const keyPressed = (e) => {
        if(e.keyCode === 13){
            api.search
            .getPhotos({ query: inputValue, orientation: "landscape", perPage: 9})
            .then(result => {
                dispatch(setImages(result.response?.results));
                history.push('/searchResult')
            })
            .catch(() => {
                console.log("Something went wrong!");
            });

        }
    }

    return (
        <div>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    onKeyDown = {keyPressed}
                    onChange = {(e) => setInputValue(e.target.value)}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </div>
    )
}
