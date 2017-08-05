import { matchPath } from "react-router";
import { LOCATION_CHANGE } from "react-router-redux";
import { ApplicationActions, MessagesActions } from "../actions";

/****************
 *     STATE    *
 ****************/

const initialState = {
  hasError: false,
  isFetching: false,
  showDetail: false,
  showNav: false,
  user: null
};

/****************
 *    REDUCER   *
 ****************/

export function applicationReducer(state = initialState, action) {
  switch (action.type) {
    /******************
     * APP NAVIGATION *
     ******************/

    // Close the detail panel.
    case ApplicationActions.CLOSE_DETAIL:
      return {
        ...state,
        showNav: false,
        showDetail: false
      };

    // Turn on/off the sidenav visibility on mobile
    case ApplicationActions.TOGGLE_SIDENAV:
      return { ...state, showNav: !state.showNav };

    // Force the sidenav to be visible
    case ApplicationActions.OPEN_SIDENAV:
      return { ...state, showNav: true };

    // Force the sidenav's visibility to be off
    case ApplicationActions.CLOSE_SIDENAV:
      return { ...state, showNav: false };

    /******************
     * DATA FETCHING  *
     ******************/

    // Start fetching.
    case ApplicationActions.FETCH_DATA:
      return {
        ...state,
        hasError: false,
        isFetching: true
      };

    // Set the fetched user as the active user.
    case ApplicationActions.DATA_FETCH_SUCCESS:
      const data = action.payload;
      const user = data.user;

      return {
        ...state,
        hasError: false,
        isFetching: false,
        user: user._id
      };

    // Data fetch failed, set the error.
    case ApplicationActions.DATA_FETCH_FAIL:
      return {
        ...state,
        hasError: true,
        isFetching: false
      };

    /******************
     *    LOCATION    *
     ******************/

    // If the path is "/messages/:id", then show the detail panel.
    // Otherwise, close the panel and the side nav.
    case LOCATION_CHANGE:
      const location = action.payload;
      const match = matchPath(location.pathname, {
        path: "/messages/:id"
      });

      return match
        ? { ...state, showDetail: true, showNav: false }
        : { ...state, showDetail: false, showNav: false };

    /******************
     *    MESSAGES    *
     ******************/

    // Set the currently active message.
    case MessagesActions.SET_ACTIVE_MESSAGE:
      return {
        ...state,
        showNav: false,
        showDetail: true
      };

    default:
      return state;
  }
}
