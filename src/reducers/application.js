import { ApplicationActions } from "../actions";

const initialState = {
  showNav: false,
  showDetail: false
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

    default:
      return state;
  }
}
