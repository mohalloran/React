import React ,{Component} from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class Main extends Component {

     render(){

         return (
           <div>
            <h1><Link to="/">Reduxstagram</Link></h1>
            {/* Render Children .Any props coming down from our parent will be passed along to our Single or PhotoGridComponent*/}
            
			{React.cloneElement({...this.props}.children, {...this.props})}
           </div>
         );
     }

};