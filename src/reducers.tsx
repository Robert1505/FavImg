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
          let ok = false;
           favorites = JSON.parse(favoritesJSON);
           for(let i = 0; i < favorites.length; i++){
             if(favorites[i] === action.payload)
                ok = true;
           }
           if(ok === false){
              favorites.push(action.payload);
              localStorage.setItem('favourites', JSON.stringify(favorites));
           }
           else{
             ok = false;
           }
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
