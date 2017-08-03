import { ApplicationActions } from "../actions";

/****************
 *     STATE    *
 ****************/

const initialState = {
  users: {}
};

/****************
 *    REDUCER   *
 ****************/

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    /******************
     * DATA FETCHING  *
     ******************/

    // Reset the users before fetching.
    case ApplicationActions.FETCH_DATA:
      return { users: {} };

    // Update the users with the fetched one.
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
