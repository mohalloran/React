
import axios from 'axios';

export const FETCH_POSTS = 'fech_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=mohalloblogposts';

export function fetchPosts() {

    console.log("before calling request ...");

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    console.log('request made is ',request);
    
    //ReduxPromise will automatically resolve request.Will not flow to reducers until request is resolved .
    return {

        type:FETCH_POSTS,
        payload:request
    }
}
/**
 * callback function passed .When we get a response from our restfull service then we will call the callback function
 * in posts_new.js onSubmit function which will navigate us to the home page .
 */
export function createPost(values,callback){

    console.log("Creating post in createPost",values);

    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
           .then(() => callback() );

    return {
        type:CREATE_POST,
        payload:request
    }

}

export function fetchPost(id){

    console.log('fetching posts ....',id);

    const request = axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`);

    return {

        type:FETCH_POST,
        payload:request
    }
}

export function deletePost(id,callback){

    console.log('Deleting post ....',id);

    const request = axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`)
         .then(() => callback() );

    return {
       type:DELETE_POST,
       payload:id
    }

}