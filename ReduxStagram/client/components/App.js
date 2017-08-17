import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';


//Application State from our reducers available in our props
function mapStateToProps(state){

    console.log('Before conversion state.posts are:',state.posts);

    
    var newComments = [];
    
    
    const comments = _.map(state.comments, (val, uid) => {
          for(var e of val){
               var newCommentsObject = {};
               newCommentsObject.uid = uid;
               newCommentsObject.text = e.text;
               newCommentsObject.user = e.user;
               newComments.push(newCommentsObject);
               
            }
           
            return newComments;
    });

    console.log('Comments are  :'+state.comments);

    return {
        posts:state.posts,
        comments:state.comments
    }
}

//make available our actions which get dispatched to our reducers .
function mapDispatchToProps(dispatch){

    return bindActionCreators({increment: actionCreators.increment,addComment: actionCreators.addComment,removeComment: actionCreators.removeComment},dispatch);
}

//going to take all the props which now have our action creators and also take our state inject into component main .
const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;


