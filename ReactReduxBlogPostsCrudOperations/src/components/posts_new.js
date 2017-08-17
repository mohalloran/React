import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import {createPost} from '../actions/index'


//reduxForm allows us to communicate with our reducers (state formReducer) .
//It is like our connect funcion which links state reduxstore to a component.
import { Field, reduxForm} from 'redux-form';


class PostsNew extends Component{

    //Define the component return some amount of JSX 
    //field contains some event handlers that we need to wire up .
    renderField(field){

        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger':''}`;

        return (
            <div className={className}>
              <label>{field.label}</label>
              {/** Communicate all the properties of the Input tag .Input is a component.
                  Pass all the pregenarated event handlers through i.e value, onChange ,onFocus,onBlur */}
              <input className="form-control"
                type="text"
                {...field.input}

              />
              {/** if the user has touched this field and focussed away */}
              <div className="text-help">
                {field.meta.touched ? field.meta.error:''}
              </div>
            </div>
        )
    }

    //will be called by ReduxForm handleSubmit .
    onSubmit(values){
         console.log(values);
         
         //valus and call back function that gets executed when service has completed its task .
         this.props.createPost(values, () =>{
             this.props.history.push('/'); //Callback call when post has been created Navigate to Home page.
         });
    }
    

    render(){

        //get a reference to the  handleSubmit function from ReduxForm .
        const { handleSubmit } = this.props;

        {/** the property component is the visual side of the component ,
            When we call this.renderField the field properties are passed to the renderField function.*/}
        {/** reduxForm handleSubmit will be called when all validation passes and calls our function onSubmit */}
        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
               <Field 
                 label="Title for Post"
                 name="title"
                 component={this.renderField}    
               />
               <Field 
                 label="Categories"
                 name="categories"
                 component={this.renderField}    
               />
              <Field 
                 label="Post Content"
                 name="content"
                 component={this.renderField}    
               /> 
               <button type ="submit" className="btn btn-primary">Submit</button>
               <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({createPost:createPost},dispatch);
}

//Validate will be called automatically for use during the forms lifecycle 
function validate(values){

    const errors = {};

    //validate the input from the 'values'
    if(!values.title || values.title.length < 3){
        errors.title="Enter a title that is at least 3 character!";
    }

    if(!values.categories){
        errors.categories ="Enter some categories !";
    }

     if(!values.content){
        errors.content ="Enter some content please  !";
    }


    //if errors is empty ,the form is fine to submit
    return errors;

}
//Registers different forms for a Page as there could be mulitlpe forms in a page 
//Will allow our components in the form to communicate directly with our reducer store .
//when we wire up reduxForm to our component not alone does it handle the state for our form components but
//we also get a bunch of additional properties i.e handleSubmit as seen above.
export default reduxForm({
    validate:validate,
    form:'PostsNewForm'
})(
    connect(null,mapDispatchToProps)(PostsNew)
);


//Take a shorcut to not use the function and use 
//connect(null,{createPost})(PostNew)