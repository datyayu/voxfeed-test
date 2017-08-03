import { LOCATION_CHANGE } from "react-router-redux";
import { campaignsReducer } from "./campaigns";
import { ApplicationActions } from "../actions";

const defaultState = {
  campaigns: {}
};

/******************
 * DATA FETCHING  *
 ******************/

test("It should reset the campaigns on FETCH_DATA action", () => {
  const action = ApplicationActions.fetchData();
  const state = defaultState;
  const updatedState = campaignsReducer(state, action);

  expect(updatedState.campaigns).toEqual({});
});

test("It should set the campaigns on DATA_FETCH_SUCCESS action", () => {
  const testCampaign = {
    _id: 1,
    brand: "Test",
    groupAd: "test campaign",
    logo: "/some/image.jpg"
  };
  const action = ApplicationActions.dataFetchSuccess({
    campaigns: { 1: testCampaign }
  });
  const state = defaultState;
  const updatedState = campaignsReducer(state, action);

  expect(updatedState.campaigns).toEqual({ 1: testCampaign });
});
