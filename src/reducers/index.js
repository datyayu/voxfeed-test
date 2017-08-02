import { combineReducers } from "redux";
import { applicationReducer } from "./application";
import { messagesReducer } from "./messages";
import { campaignsReducer } from "./campaigns";
import { usersReducer } from "./users";

export const reducer = combineReducers({
  application: applicationReducer,
  campaigns: campaignsReducer,
  messages: messagesReducer,
  users: usersReducer
});
