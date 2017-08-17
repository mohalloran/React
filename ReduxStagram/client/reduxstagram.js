// let's go!
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';  //The Binding which allows us to use React with Redux .
import store, { history } from './store';// exported from store.js .store is default and history is a named export
//import css
import css from './styles/style.styl';
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

//Sentry
import Raven from 'raven-js';//Sentry for error tracking
import { sentry_url } from './data/config';
Raven.config(sentry_url).install();

//console.log(window.doesNotExist.nope);

const router = (

  <Provider store={store}>  
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
  </Provider>
)

render(router,document.getElementById('root'));
