import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Welcome from './components/Welcome';
import BuyPage from './components/BuyPage';
// import SearchPage from './components/SearchPage';
import Main from './components/Main';
import HouseSell from  './components/HouseSell'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={Welcome}></IndexRoute>
    <Route path='buy' component={BuyPage}></Route>
    <Route path='housesell' component={HouseSell}></Route>
{ /*  <Route path='search' component={SearchPage}></Route>*/}
    </Route>

  </Router>,
  document.getElementById('root')
);


// <Route path='seachClient' component={SearchClient}></Route>
// <Route path='animals' component={AnimalsPage}></Route>
