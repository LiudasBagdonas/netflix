import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import content from "../../content/reducer";
import auth from "../../auth/reducer";

const allReducers = combineReducers({
  content,
  auth,
});

const store = createStore(allReducers, applyMiddleware(thunk));
export default store;