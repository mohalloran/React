import React,{Component} from 'react';


class Comment extends Component {

    renderComments(comment, index){
         
        console.log('Rendering comments',comment);

        return (
            
            <div className="comment" key={index}>
            
               <p>
                  <strong>{comment.user}</strong>
                  {comment.text}
                  <button className="remove-comment" onClick={this.handleRemove.bind(this,index)}>&times;</button>
               </p>
            
            </div>

        );

    }

    handleRemove(index){
        const { postId } = this.props.params;
        this.props.removeComment(postId,index);
    }


    handleSubmit(event){
         event.preventDefault();
         console.log('Submitting the form');

         const { postId } = this.props.params;
         const author = this.refs.author.value;
         const comment = this.refs.comment.value;

         this.props.addComment(postId, author, comment);
         this.refs.commentForm.reset();
    }

    render(){

        const { postComments } = this.props;
        return (

            <div className="comment">
                {postComments.map( (comment,index) => this.renderComments(comment,index))}

                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                   <input type="text" ref="author" placeholder="author" />
                   <input type="text" ref="comment" placeholder="comment" />
                   <input type="submit" hidden />
                </form>
            </div>

        );

    }
}

export default Comment;
