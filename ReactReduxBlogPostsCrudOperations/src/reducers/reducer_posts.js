import {FETCH_POSTS} from '../actions/index';
import {FETCH_POST} from '../actions/index';
import {DELETE_POST} from '../actions/index';
import _ from 'lodash';

export default function(state={},action){

   switch(action.type){
       case FETCH_POST:

           //const post = action.payload.data;//post we retrieved .
           //Possible a number of posts stored in State object so dont want to throw away all previous posts I have fetched. 
           //create a new state object so will find the one I am working on and return it  .
           //const newState = { ...state };  
           //newState[post.id] = post;

           //return newState;

           //ES6
           //take the existing state object created from previous searches and a property of id and its value (key value pair to the existing state object .)
           console.log('State Object in reducer_posts...',state);
           return { ...state ,[action.payload.data.id]: action.payload.data};

       case FETCH_POSTS:

           //Transform into object as we are getting back an Arry of objects .
           //lodash does tranformation of object array to Object with key as Id .
           return _.mapKeys(action.payload.data,'id');

        case DELETE_POST:
           
           //look at the state object and if it has an id of post.id remove it .
           return _.omit(state,action.payload); 

       default:
          return state;
   }
     
}