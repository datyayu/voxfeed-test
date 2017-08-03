import { ApplicationActions } from "../actions";

const initialState = {
  users: {}
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ApplicationActions.DATA_FETCH_SUCCESS:
      const data = action.payload;
      const user = data.user;
      return {
        users: {
          [user._id]: user
        }
      };

    default:
      return state;
  }
}
