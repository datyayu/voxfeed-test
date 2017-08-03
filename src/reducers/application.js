import { ApplicationActions, MessagesActions } from "../actions";
import { LOCATION_CHANGE } from "react-router-redux";
import { matchPath } from "react-router";

const initialState = {
  showNav: false,
  showDetail: false,
  user: null
};

export function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case ApplicationActions.TOGGLE_SIDENAV:
      return { ...state, showNav: !state.showNav };

    case ApplicationActions.CLOSE_DETAIL:
      return {
        ...state,
        showNav: false,
        showDetail: !state.showDetail
      };

    case ApplicationActions.DATA_FETCH_SUCCESS:
      const data = action.payload;
      const user = data.user;
      return {
        user: user._id
      };

    case MessagesActions.SET_ACTIVE_MESSAGE:
      return {
        ...state,
        showNav: false,
        showDetail: true
      };

    case LOCATION_CHANGE:
      const location = action.payload;
      const match = matchPath(location.pathname, {
        path: "/messages/:id"
      });

      return match
        ? { ...state, showDetail: true, showNav: false }
        : { ...state, showDetail: false, showNav: false };

    default:
      return state;
  }
}
