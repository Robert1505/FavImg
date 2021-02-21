import { GridListTile } from "@material-ui/core";
import { GridList } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { GridListTileBar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { addImage, deleteImage } from "./actions";
import SearchBar from "./Components/ResultsComponents/SearchBar";
import StarIcon from "@material-ui/icons/Star";
import NavBar from "./Components/FavouritesComponents/NavBar";
import { api } from "./App";
import ModalImage from "react-modal-image";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: "#D1BCE3",
    },
    gridList: {
      width: "100%",
      height: "100%",
    },
    titleBar: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
        "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    icon: {
      color: "white",
    },
    gridTile: {
        "& div": {
            height: '100%',
            width: '100%',
            "& img": {
                height: '100%',
                width: '100%',
                objectFit: 'cover'
            }
        },
        "& .__react_modal_image__header": {
            backgroundColor: 'transparent'
        }
    }
  })
);

export default function Favourites({}: Props): ReactElement {
  const classes = useStyles();

  const [favoriteImages, setFavoriteImages] = useState<any[]>([]);

  useEffect(() => {
    const favoriteJSON = localStorage.getItem("favourites");
    const imageIds: string[] = JSON.parse(favoriteJSON || "");
    const favImages: any = [];

    const fetchImages = async () => {
      for (let i = 0; i < imageIds.length; i++) {
        const imageResponse = await api.photos.get({
          photoId: imageIds[i],
        });
        favImages.push(imageResponse.response);
      }
    };

    fetchImages().then(() => {
      setFavoriteImages(favImages);
    });
  }, []);

  const renderImages = () => {
    return favoriteImages.map((image: any, idx: number) => (
      <GridListTile key={`test-${idx}`} cols={1} className={classes.gridTile}>
        <ModalImage
          small={image.urls.regular}
          large={image.urls.full}
          alt={image.id.toString()}
        />
        
      </GridListTile>
    ));
  };

  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <GridList cellHeight={500} className={classes.gridList} cols={3}>
          {renderImages()}
        </GridList>
      </div>
    </div>
  );
}
