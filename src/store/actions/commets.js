import * as actions from './actionType'
import axios from 'axios'

const getCommentsRequestStart = () => ({
    type: actions.GET_COMMENTS_REQUEST_START
})
const setComments = (comments) => ({
    type: actions.SET_COMMENTS,
    payload: comments
})

const getCommentsRequestFailed = (error) => ({
    type:actions.GET_COMMENTS_REQUEST_FAILED,
    payload:error
})

// Async
export function get_comments(postId){
    return dispatch => {
        dispatch(getCommentsRequestStart())
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(rosponse => {
                dispatch(setComments(rosponse.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(getCommentsRequestFailed(error))
            })
    }
}