import { ApplicationActions } from "../actions";

const initialState = {
  campaigns: {}
};

export function campaignsReducer(state = initialState, action) {
  switch (action.type) {
    case ApplicationActions.DATA_FETCH_SUCCESS:
      const data = action.payload;
      return { campaigns: data.campaigns };

    default:
      return state;
  }
}
