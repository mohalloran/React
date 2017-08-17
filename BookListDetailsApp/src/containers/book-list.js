import React,{Component} from 'react';
import {connect} from 'react-redux';

//Action Creator 
import { selectBook } from '../actions/index';
//This function makes sure that all the actions we create end up flowing through all the reducers
import {bindActionCreators} from 'redux';

class BookList extends Component{

    renderList(){
       return this.props.books.map( (book) =>{
           return (
              <li 
                onClick={() => this.props.selectBook(book)}  
                key={book.title}  
                className="list-group-item">{book.title}</li>
           );
       });
   }

    render(){

        return (
          <ul className="List-group col-sm-4">
                
              {this.renderList()}

          </ul>
        );
    }

}

//Take application State and supply it here
//Glue between React and Redux .
//When state changes Component BookList will rerender .
function mapStateToProps(state){
   //Whatever is returned will show up a props
   //inside of BookList
   //return as props .so this.props.books is available
   return {
      books:state.books
   };
}

/**
 * Anything returned from this function will end up as props on the booklist container
 */
function mapDispatchToProps(dispatch){
    console.log('mapDispatchToProps......');
    //Maps props to a dispact function .
    //Whenever selectBook is called,the result should be passed
    //to all our reducers .Dispatch takes all the actions and dispatches out to 
    //all the reducers .Binds actionCreator to our container BookList.
    return bindActionCreators({ selectBook:selectBook},dispatch);
}

//Takes the function mapStateToProps and component BookList and creates a container component
//container is state aware 
//Connects a React component to a Redux store .
//Promote BooList from a component to a container - 
//it needs to know about this new dispatch method selectBook.Make it available
//as a prop.
export default connect(mapStateToProps ,mapDispatchToProps) (BookList);

