import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { movieReducer } from "../reducers/moviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
//create store
export const store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
