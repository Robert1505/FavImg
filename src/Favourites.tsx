import { GridListTile } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { GridListTileBar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {addImage, deleteImage} from './actions';
import SearchBar from './Components/ResultsComponents/SearchBar';
import StarIcon from '@material-ui/icons/Star';
import NavBar from './Components/FavouritesComponents/NavBar';
import {api} from './App';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: '100%',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
  }),
);

export default function Favourites({}: Props): ReactElement {

    const classes = useStyles();

    const [favoriteImages, setFavoriteImages] = useState<any[]>([]);

    const favImages: any[] = [];

    useEffect(() => {

        const favoritesJSON = localStorage.getItem('favourites');
        const imageIds: string[] = JSON.parse(favoritesJSON || "");

        imageIds.map((id) => {
            api.photos.get({
                photoId: id
            })
            .then((result) => {
                favImages.push({...result.response});
                console.log('favImages', favImages);
            })
            .catch(err => {
                console.log('error',err);
            })
        })
        setFavoriteImages(favImages);
        
    }, []);


    useEffect(() => {
        JSON.stringify(favoriteImages)
        console.log('stringify', favoriteImages);
    }, [favoriteImages])

    const renderImages = () => {
        if (favoriteImages !== undefined) {
            console.log('favoriteImages',favoriteImages);
            return (
                favoriteImages.map((image: any, idx: number) => (
                    <GridListTile key={`test-${idx}`} cols={1}>
                        {console.log('urls', image.urls.regular)}
                        {console.log('image.id', image.id)};
                    <img src={image.urls.regular} alt={image.id.toString()} />
                    <GridListTileBar
                        title='Add to favourites'
                        titlePosition="top"
                        // actionIcon={
                        // <IconButton className={classes.icon}>
                        //     <StarBorderIcon />
                        // </IconButton>
                        // }
                        // actionPosition="left"
                        className={classes.titleBar}
                    />
                    </GridListTile>
                 ))
            )
        }
        return <div></div>
    }

    return (
        <div>
            <NavBar />
             <div className={classes.root}>
                <GridList cellHeight={500} className={classes.gridList} cols={3}>
                   {renderImages()}
                </GridList>
            </div>
        </div>
    )
}
