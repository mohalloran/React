//State Arguement is not Application state, only the state 
//this reducer is responsible for .
//default state to null when undefined when starting up piece of ES6 Syntex
export default function(state=null,action){

    switch(action.type){
        
        case 'BOOK_SELECTED':
            console.log('in reducer switch statement:'+action.payload.title);
            return action.payload;
    }
    return state;

}