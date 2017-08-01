import { createStore, combineReducers } from "redux";
import { applicationReducer } from "./application";

export const reducer = combineReducers({
  application: applicationReducer
});
