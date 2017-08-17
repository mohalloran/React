import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';


//Is what interacts with the History Library and determines what to do based on a change in the url 
//BrowserRouter is saying I want ReactRouter to look at the entire Url 
//Switch component takes in a collection of different routes.
import {BrowserRouter,Route,Switch}  from 'react-router-dom';

//Apply middleware redux-promise .Redux promise middleware enables robust handling of async code in Redux.
//Waits for results to come back from call and then passes on to reducers .
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
         {/* Takes in a collection of different routes .most specific routes go first .  */}
         
         <Route path="/posts/new" component={PostsNew} />
         <Route path="/posts/:id" component={PostsShow} />
         <Route path="/" component={PostsIndex} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
