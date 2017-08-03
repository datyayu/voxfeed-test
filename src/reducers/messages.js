import { ApplicationActions, MessagesActions } from "../actions";
import { LOCATION_CHANGE } from "react-router-redux";
import { matchPath } from "react-router";

const initialState = {
  messages: {},
  searchQuery: "",
  read: [],
  active: -1
};

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case MessagesActions.CHANGE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };

    case ApplicationActions.CLOSE_DETAIL:
      return {
        ...state,
        active: -1
      };

    case ApplicationActions.DATA_FETCH_SUCCESS:
      const data = action.payload.tweets;
      const messages = data.reduce((hash, tweet) => {
        hash[tweet._id] = tweet;
        return hash;
      }, {});
      return { ...state, messages: messages };

    case LOCATION_CHANGE:
      const location = action.payload;
      const match = matchPath(location.pathname, {
        path: "/messages/:id"
      });

      if (!match) {
        return { ...state, active: -1 };
      }

      const messageId = match.params.id;

      return {
        ...state,
        active: messageId,
        read: state.read.some(id => id === messageId)
          ? state.read
          : [...state.read, messageId]
      };

    default:
      return state;
  }
}
