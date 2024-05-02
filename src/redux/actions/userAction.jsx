export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const UPDATE_USER = "UPDATE_USER";
export const LOGOUT = "LOGOUT";

export const logout = () => {
  return { type: LOGOUT };
};

export const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccess = (user) => {
  return { type: LOGIN_SUCCESS, payload: user };
};

export const loginFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error };
};

export const updateUser = (userData) => ({
  type: UPDATE_USER,
  payload: userData,
});
