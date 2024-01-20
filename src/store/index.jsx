import { combineReducers, legacy_createStore as createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { usersReducer } from "../reducers/usersReducer.js";




const reducers = combineReducers({
  users: usersReducer,
});
export const store = createStore(reducers, composeWithDevTools());
