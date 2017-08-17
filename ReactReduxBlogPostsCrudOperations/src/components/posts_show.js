import React , {Component } from 'React';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {fetchPost} from '../actions/index';
import {deletePost} from '../actions/index';
import {Link} from 'react-router-dom';


class PostsShow extends Component {

    componentDidMount(){
         const { id } = this.props.match.params;//retrieve the parameter of 'id' sent in the search provided by react router.
         console.log('id is in PostsShow:'+id);
         this.props.fetchPost(id);
    }

    onDeleteClick(postId){

        console.log('Deleting post '+postId);
        const {id}   = this.props.match.params;
        console.log('props id is '+id);

        this.props.deletePost(id,() =>{
            this.props.history.push('/'); //Callback call when post has been created Navigate to Home page.
        });
    }

    render(){
        //this.state.props.posts[this.props.match.params];
        console.log('rendering in posts_show.....');

        const { post } = this.props;

        if(!post){
           return <div>Loading.....</div>
        }

        return (

            <div>
              <Link to='/'>Back To Index</Link>
              <button className='btn btn-danger pull-xs-right' onClick={this.onDeleteClick.bind(this,post.id)}>Delete Post</button>
              <h3>{post.title}</h3>
              <h6>Categories: {post.categories}</h6>
              <p>{post.content}</p>
            </div>
        );
    }
}
//second arguement is ownProps is the props that is headed to PostsShow .This includes the id that is being passed .
function mapStateToProps(state,ownProps){

    //contains all the posts inside our application
    //get a single post

    console.log('mapStateToProps:',state.posts);
    console.log('ownProps is:',ownProps.match.params.id);

   
    return {post:state.posts[ownProps.match.params.id]};
    
}

function mapDispatchToProps(dispatch){
    console.log('mapDispatchtoProps....');
    return bindActionCreators({fetchPost:fetchPost ,deletePost:deletePost},dispatch);//dispatch to reducers
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsShow);