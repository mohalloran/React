//Increment
export function increment(index){
    return {
      type:'INCREMENT_LIKES',
      payload:index

    }
}


//Add comment
export function addComment(postId, author,comment){
    return {
        type:'ADD_COMMENT',
        payload: { postId:postId,
           author:author,
           comment:comment
        }
    }
}

//remove comment
export function removeComment(postId, index){
   return {
       type:'REMOVE_COMMENT',
       payload:{index,postId}
   }
}