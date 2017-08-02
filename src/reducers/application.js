import { ApplicationActions, MessagesActions } from "../actions";

const initialState = {
  showNav: false,
  showDetail: false,
  user: 1
};

export function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case ApplicationActions.TOGGLE_SIDENAV:
      return { ...state, showNav: !state.showNav };

    case ApplicationActions.TOGGLE_DETAIL:
      return {
        ...state,
        showNav: false,
        showDetail: !state.showDetail
      };

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
