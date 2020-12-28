import * as actionTypes from '../actions/actionType'

const initialState = {
    list: undefined,
    isLoading: false,
    error: null
}


const getCommentsRequestStart = (state) => ({
    ...state,
    isLoading: true
})
const setComments = (state, comments) => ({
    ...state,
    list: comments
})
const getCommentsRequestFailed = (state, error) => ({
    ...state,
    error: error
})


function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.GET_COMMENTS_REQUEST_START: return getCommentsRequestStart(state)
        case actionTypes.SET_COMMENTS: return setComments(state, payload)
        case actionTypes.GET_COMMENTS_REQUEST_FAILED: return getCommentsRequestFailed(state, payload)

        default: return state;
    }
}

export default reducer