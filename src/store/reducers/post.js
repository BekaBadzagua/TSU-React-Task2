import * as actionTypes from '../actions/actionType'

const initialState = {
    list: undefined,
    currentPost: undefined,
    isLoading: false,
    error: null
}

const getPostsRequestStart = (state) => ({
    ...state,
    isLoading: true
})
const setPosts = (state, posts) => ({
    ...state,
    list: posts
})
const getPostsRequestFailed = (state, error) => ({
    ...state,
    error: error
})
const getPostRequestStart = (state) => ({
    ...state,
    isLoading: true
})
const setPost = (state, post) => ({
    ...state,
    currentPost: post
})
const getPostRequestFailed = (state, error) => ({
    ...state,
    error: error
})


function reducer(state = initialState, data) {
    switch (data.type) {
        case actionTypes.GET_POSTS_REQUEST_START: return getPostsRequestStart(state)
        case actionTypes.SET_POSTS: return setPosts(state, data.payload)
        case actionTypes.GET_POSTS_REQUEST_FAILED: return getPostsRequestFailed(state, data.payload)

        case actionTypes.GET_POST_REQUEST_START: return getPostRequestStart(state)
        case actionTypes.SET_POST: return setPost(state, data.payload)
        case actionTypes.GET_POST_REQUEST_FAILED: return getPostRequestFailed(state, data.payload)

        default: return state;
    }
}

export default reducer