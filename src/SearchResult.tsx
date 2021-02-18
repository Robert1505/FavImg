import { GridList, GridListTile } from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Photo } from "./reducers";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Image from "./Components/ResultsComponents/Image";
import NavBar from "./Components/ResultsComponents/NavBar";
import SearchBar from "./Components/ResultsComponents/SearchBar";


interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
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
  })
);

export default function SearchResult({}: Props): ReactElement {
  const classes = useStyles();
  const dispatch = useDispatch();
  const images: Photo[] = useSelector((state) => state.img);

  return (
    <div>
      <NavBar />
      <SearchBar />
      <div className={classes.root}>
        <GridList cellHeight={500} className={classes.gridList} cols={3}>
          {images.map((image: Photo) => (
            <GridListTile key={image.id} cols={1}>
              <Image image={image} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
