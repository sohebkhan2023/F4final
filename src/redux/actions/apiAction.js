
import * as types from "./actionType"

export const fetchPostsRequest = () => ({
    type: types.FETCH_POSTS_REQUEST,
  });
  
  export const fetchPostsSuccess = (posts) => ({
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts,
  });
  
  export const fetchPostsFailure = (error) => ({
    type: types.FETCH_POSTS_FAILURE,
    payload: error,
  });