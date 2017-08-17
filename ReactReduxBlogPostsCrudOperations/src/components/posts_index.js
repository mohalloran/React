import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';



class PostsIndex extends Component{

    componentDidMount(){

        console.log('Component did mount...');

        this.props.fetchPosts();
    }

    renderPosts(){

        //for(var p in  this.props.posts){
        //    console.log(p +"=>" +this.props.posts[p].categories);
        //}
        //ES6
        //for (const key of Object.keys(this.props.posts)) {
        //    console.log(key, this.props.posts[key].categories);
        //}

        //Es7
        //Object.entries(this.props.posts).forEach(
        //   ([key, value]) => console.log(key, value.categories)
        //);

       //lodash
       // _.map(this.props.posts).forEach(function(post){
       //           console.log('post is '+post.content);
       // });
      
      return  _.map(this.props.posts , (post) => {
             return  (
                 <li className="list-group-item" key={post.id} >
                   <Link to={`posts/${post.id}`}>
                     {post.title}
                   </Link>
                 </li>
             );
       });
        
    }
    render(){

        return (

            <div>
               
               <div className="text-xs-right">
                   <Link className="btn btn-primary" to="/posts/new">
                       Add a Post
                   </Link>
               </div>

               <h3>Posts</h3>
               <ul className="list-group" >
               
                  {this.renderPosts()}
                 
               </ul>
            </div>
        )
    }
}

function mapStateToProps(state){

    

    return{
        posts:state.posts
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({ fetchPosts:fetchPosts},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex);

//Can use the following shortcut instead of creating the function mapDispatchToProps(dispatch)
//export default connect(null,{fetchPost:fetchPost})(PostIndex);