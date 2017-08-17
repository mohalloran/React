import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';


//Three pieces of state stored in Redux posts,comment and changes in url 
const rootReducer = combineReducers({
   posts:posts,
   comments: comments,
   routing: routerReducer
});

export default rootReducer;