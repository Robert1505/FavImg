import { combineReducers } from "redux";

export type Photo = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

const INITIAL_STATE: Photo[] = [];

let favorites: string[], favoritesJSON: string | null;

export const imgReducer = (oldState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return [...action.payload];
    case "ADD_IMAGE":
         favoritesJSON = localStorage.getItem("favourites");
        if (favoritesJSON != null) {
           favorites = JSON.parse(favoritesJSON);
            favorites.push(action.payload);
            localStorage.setItem('favourites', JSON.stringify(favorites));
        } else {
            localStorage.setItem('favourites', JSON.stringify([action.payload]));
        }
        return oldState;
    case "DELETE_IMAGE":
        favoritesJSON = localStorage.getItem("favourites");
       if(favoritesJSON !== null){
          favorites = JSON.parse(favoritesJSON);
          favorites = favorites.filter((favoriteID) => favoriteID != action.payload );
          localStorage.setItem('favourites', JSON.stringify(favorites));
       }
       return oldState;
    default:
      return oldState;
  }
};

export default combineReducers({
  img: imgReducer,
});
