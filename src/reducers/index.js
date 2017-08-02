import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { applicationReducer } from "./application";
import { messagesReducer } from "./messages";
import { campaignsReducer } from "./campaigns";
import { usersReducer } from "./users";

export const reducer = combineReducers({
  application: applicationReducer,
  campaigns: campaignsReducer,
  messages: messagesReducer,
  router: routerReducer,
  users: usersReducer
});
