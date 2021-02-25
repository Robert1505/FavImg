import React, { ReactElement, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Landing from './Landing';
import Favourites from './Favourites';
import Page404 from './Page404';
import SearchResult from './SearchResult';
import './App.css'
import { createApi } from 'unsplash-js';

interface Props {
  
}


export const api = createApi({
  accessKey: "msWkT_7M07VSZo2rv-sFioPOeuQYQlHgEVCxfO5Bd0M",
});


export default function App({}: Props): ReactElement {

  useEffect(() => {
    localStorage.setItem('favourites', '');
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        {/* <div className = 'background-landing'> */}
        <Route path = '/' exact>
          <Landing />
        </Route>
        {/* </div> */}
        <Route path = "/favourites" exact>
          <Favourites />
        </Route>
        <Route path = "/searchResult" exact>
          <SearchResult />
        </Route>
        <Route path = "*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

