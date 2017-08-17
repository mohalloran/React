import React ,{Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{

    constructor(props){

        

        super(props);

        this.state = {term:''}

        //Change the context of the function onInputChange .
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        //console.log(event.target.value);
        this.setState({term:event.target.value});
    }
    onFormSubmit(event){
         event.preventDefault();
         this.props.fetchWeather(this.state.term);
         this.setState({term:''});
         //console.log('Search term is '+this.state.term);
    }

    render(){

        

        return (
            <div>
            <form className="input-group" onSubmit={this.onFormSubmit}>
               <input
                  placeholder='Get a five day forecast in your favorite cities'
                  className="form-control"
                  onChange={this.onInputChange}
                  value={this.state.term}  />
               <span className="input-group-btn">
                  <button type="submit" className="btn btn-secondary">Submit</button>
               </span>
              

            </form>

            <span >{this.state.term} </span>

            </div>
        )
    }


}

/**
 * Hook up our SearchBar container to our Action Creator fetchWeather and make featchWearher available as a prop .
 * Anything returned from this function will end up as props on the booklist container
 */
function mapDispatchToProps(dispatch){
    console.log('mapDispatchToProps......');
    //Maps props to a dispact function .
    //Whenever featchWeather is called,the result should be passed
    //to all our reducers .Dispatch takes all the actions and dispatches out to 
    //all the reducers .Binds actionCreator to our container SearchBar.
    return bindActionCreators({ fetchWeather:fetchWeather},dispatch);
}

//No State set to null,Action creator available.
//connects the ActionCreator fetchWeather to our component makes available in props.
export default connect(null,mapDispatchToProps) (SearchBar);

