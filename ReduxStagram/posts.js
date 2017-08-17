// A Reducer takes in two things an Action and Store i.e payload .

export default function posts( state = [],action){

    console.log(state,action);

    switch(action.type){
         
         case 'INCREMENT_LIKES':

         const i = action.payload;
         console.log('state is',state);
         //We want to return the whole array so take all elements up to the one we are updating and all the ones after and
         //modify the one we are interested in .
         return [
               ...state.slice(0,i),//before the one we are updating
               { ...state[i], likes: state[i].likes + 1 },
               ...state.slice(i + 1),//all elements after the one we are updating
         ]

         default:
             console.log('state is',state);
             return state;
    }

    
}