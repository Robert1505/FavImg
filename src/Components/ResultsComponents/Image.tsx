import { GridListTileBar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { GridListTile } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {addImage, deleteImage} from '../../actions';
import {useSelector, useDispatch} from 'react-redux';
import StarIcon from '@material-ui/icons/Star';
import { useEffect } from 'react';

interface Props {
    image: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

export default function Image({image}: Props): ReactElement {

    const classes = useStyles();
    const [favourite, setFavourite] = useState(false);
    const dispatch = useDispatch();

    const handleClick = (image) => {
        console.log("clicked", favourite)
        if(favourite === false){
            dispatch(addImage(image.id));
            setFavourite(true);
        }
      else{
         dispatch(deleteImage(image.id));
        setFavourite(false);
      }
    }

    const renderIcon = () => {
        if(!favourite)
            return <StarBorderIcon />
        else
            return <StarIcon />
    }

    useEffect(() => {
      let favourites = localStorage.getItem('favourites');
      let ok = false;
      favourites = JSON.parse(favourites || "");
      if (favourites !== null) {
        for(let i = 0; i < favourites.length; i++){
          if(image.id === favourites[i]){
            ok = true;
          }
        }
      }
    
      setFavourite(ok);
    }, [])

    return (
        
           <div style={{width: '100%', height: '100%'}}>
                <img src={image.urls.regular} alt={image.id.toString()} style={{objectFit: 'cover', height: '100%', width: '100%'}}/>
                <GridListTileBar
                    title='Add to favourites'
                    titlePosition="top"
                    actionIcon={
                    <IconButton className={classes.icon} onClick={() => handleClick(image)}>
                      {renderIcon()}
                    </IconButton>
                  }
                  actionPosition="left"
                  className={classes.titleBar}
                />
            </div>
    )
}
