import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER,
} from "../actions/userAction";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    case UPDATE_USER:
      const updatedUser = {
        ...state.user,
        avatar: action.payload.avatar || state.user.avatar,
        username: action.payload.username || state.user.username,
        email: action.payload.email || state.user.email,
      };

      return {
        ...state,
        user: updatedUser,
      };
    default:
      return state;
  }
};

export default userReducer;
