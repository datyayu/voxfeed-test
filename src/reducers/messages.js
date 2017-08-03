import { ApplicationActions, MessagesActions } from "../actions";
import { LOCATION_CHANGE } from "react-router-redux";
import { matchPath } from "react-router";

/****************
 *     STATE    *
 ****************/

const initialState = {
  messages: {},
  searchQuery: "",
  read: [],
  active: -1
};

/****************
 *    REDUCER   *
 ****************/

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    /******************
     * APP NAVIGATION *
     ******************/

    // Unset the active message.
    case ApplicationActions.CLOSE_DETAIL:
      return {
        ...state,
        active: -1
      };

    /******************
     * DATA FETCHING  *
     ******************/

    // Reset messages before fetching.
    case ApplicationActions.FETCH_DATA:
      return { ...state, messages: {} };

    // Update the messages with the fetched ones.
    case ApplicationActions.DATA_FETCH_SUCCESS:
      const data = action.payload.tweets;
      const messages = data.reduce((hash, tweet) => {
        hash[tweet._id] = tweet;
        return hash;
      }, {});

      return { ...state, messages: messages };

    /******************
     *    LOCATION    *
     ******************/

    // If matches /messages/:id, then set the active message to that id
    // Otherwise, set it to -1 (an invalid value).
    case LOCATION_CHANGE:
      const location = action.payload;
      const match = matchPath(location.pathname, {
        path: "/messages/:id"
      });

      if (!match) {
        return { ...state, active: -1 };
      }

      const messageId = parseInt(match.params.id, 10);

      return {
        ...state,
        active: messageId,
        read: state.read.some(id => id === messageId)
          ? state.read
          : [...state.read, messageId]
      };

    /******************
     *     SEARCH     *
     ******************/

    // Update the search query.
    case MessagesActions.CHANGE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };

    default:
      return state;
  }
}
