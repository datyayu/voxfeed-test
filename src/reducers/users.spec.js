import { LOCATION_CHANGE } from "react-router-redux";
import { usersReducer } from "./users";
import { ApplicationActions } from "../actions";

const defaultState = {
  campaigns: {}
};

test("It should reset the users on FETCH_DATA action", () => {
  const action = ApplicationActions.fetchData();
  const state = defaultState;
  const updatedState = usersReducer(state, action);

  expect(updatedState.users).toEqual({});
});

test("It should set the users on DATA_FETCH_SUCCESS action", () => {
  const testUser = {
    _id: 1,
    name: "Test",
    avatarUrl: "/some/image.jpg"
  };
  const action = ApplicationActions.dataFetchSuccess({
    user: testUser
  });
  const state = defaultState;
  const updatedState = usersReducer(state, action);

  expect(updatedState.users).toEqual({ 1: testUser });
});
