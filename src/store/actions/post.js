import * as actions from './actionType'
import axios from 'axios'

const getPostsRequestStart = () => ({
    type: actions.GET_POSTS_REQUEST_START
})
const setPosts = (posts) => ({
    type: actions.SET_POSTS,
    payload: posts
})
const getPostsRequestFailed = (error) => ({
    type: actions.GET_POSTS_REQUEST_FAILED,
    payload: error
})

const getPostRequestStart = () => ({
    type: actions.GET_POST_REQUEST_START
})
const setPost = (post) => ({
    type: actions.SET_POST,
    payload: post
})
const getPostRequestFailed = (error) => ({
    type: actions.GET_POST_REQUEST_FAILED,
    payload: error
})

// Async
export function get_posts() {
    return dispatch => {
        dispatch(getPostsRequestStart())
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch(setPosts(response.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(getPostsRequestFailed(error))
            })
    }
}

export function get_post(id) {
    return dispatch => {
        dispatch(getPostRequestStart())
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                dispatch(setPost(response.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(getPostRequestFailed(error))
            })
    }
}
