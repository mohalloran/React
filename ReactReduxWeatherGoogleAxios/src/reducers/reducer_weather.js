
import {FETCH_WEATHER} from '../actions/index';
//Initial state of []
export default function(state=[],action){

    //console.log('Action Received',action);

    switch(action.type){

        case FETCH_WEATHER:
           //Never mutate our state .
           //concat creates a new array with all the old stuff and new stuff .
           //return state.concat( [action.payload.data] );

           //instead use ES6 Spread Operator
           //so create a new Array and append the contents of existing array ...state
           
           return [action.payload.data, ...state];

    }

    console.log('State Returned from reducers is:',state);

    return state;
}