import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import list from "./list";

export default combineReducers({
  list,
  form: formReducer,
})
