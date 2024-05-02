import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

import userReducer from "./reducers/userReducer";
import blogReducer from "./reducers/blogReducer";

const rootReducer = combineReducers({
  user: userReducer,
  blog: blogReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
