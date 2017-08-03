import { ApplicationActions } from "../actions";

/****************
 *     STATE    *
 ****************/

const initialState = {
  campaigns: {}
};

/****************
 *    REDUCER   *
 ****************/

export function campaignsReducer(state = initialState, action) {
  switch (action.type) {
    /******************
     * DATA FETCHING  *
     ******************/

    // Reset the campaigns before fetching.
    case ApplicationActions.FETCH_DATA:
      return { campaigns: {} };

    // Update the campaigns with the fetched ones.
    case ApplicationActions.DATA_FETCH_SUCCESS:
      const data = action.payload;
      return { campaigns: data.campaigns };

    default:
      return state;
  }
}
