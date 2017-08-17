
import React,{ Component } from 'react';


//functional component
//const SearchBar = () =>{

//    return <input />;
//};

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render(){


        //return <input onChange={this.onInputChange} />;
        return (
           <div className = "search-bar">
              {/*Controlled component value is assigned what is put in the state with the on change .*/}
              <input
               value={this.state.term} 
               onChange={ (event) => this.onInputChange(event.target.value ) } />

              
           </div>
        );
    }

    onInputChange(term) {

        this.setState({term:term});
        this.props.onSearchTermChange(term);//fires callback function
        //console.log(event.target.value);

    }

}

export default SearchBar;



