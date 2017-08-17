import React ,{Component} from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import Photo from './Photo';

export default class PhotoGrid extends Component {

    renderPosts(){
      return this.props.posts.map( (post,i) => {
             return (
                  <Photo key={i} i={i} post={post} {...this.props}/>
                )
         });
    }   
    
     render(){

         console.log('rendering props ',this.props);

         return (
           <div className="photo-grid">
              {this.renderPosts()}
           
           </div>
         );
     }

};