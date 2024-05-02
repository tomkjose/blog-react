export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";
export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";
export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const deletePostRequest = (postId) => ({
  type: DELETE_POST_REQUEST,
  payload: postId,
});

export const deletePostSuccess = () => ({
  type: DELETE_POST_SUCCESS,
});

export const deletePostFailure = (error) => ({
  type: DELETE_POST_FAILURE,
  payload: error,
});

export const updatePostRequest = (post) => ({
  type: UPDATE_POST_REQUEST,
  payload: post,
});

export const updatePostSuccess = (updatedPost) => ({
  type: UPDATE_POST_SUCCESS,
  payload: updatedPost,
});

export const updatePostFailure = (error) => ({
  type: UPDATE_POST_FAILURE,
  payload: error,
});

export const createPostRequest = (postData) => ({
  type: CREATE_POST_REQUEST,
  payload: postData,
});

export const createPostSuccess = (newPost) => ({
  type: CREATE_POST_SUCCESS,
  payload: newPost,
});

export const createPostFailure = (error) => ({
  type: CREATE_POST_FAILURE,
  payload: error,
});
