
const INITIAL_STATE = {postId: '', author: '', comment: ''};

function postComments(state = [],action){
    switch(action.type){
        case 'ADD_COMMENT' :
             return [...state,{
                 user:action.payload.author,
                 text:action.payload.comment
                }];
         case 'REMOVE_COMMENT':
             return [
                 //from start to the one we are deleting .
                 ...state.slice(0,action.payload.index),
                 //and all the one after the one we are deleting .
                 ...state.slice(action.payload.index+1)
             ]
             

        default:
          return state;
    }
}

export default function comments( state = INITIAL_STATE,action){

    console.log('reacted function..');
    if(typeof action.payload !== 'undefined'){
          console.log('payload postId is',action.payload.postId);
          return {

              ...state,

              //Override this post with a new one
              [action.payload.postId]: postComments(state[action.payload.postId],action)
          }
    }
   
      return state;
   

    
}