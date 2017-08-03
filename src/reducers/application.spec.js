import { LOCATION_CHANGE } from "react-router-redux";
import { applicationReducer } from "./application";
import { ApplicationActions, MessagesActions } from "../actions";

const defaultState = {
  showNav: false,
  showDetail: false,
  user: null
};

/******************
 * APP NAVIGATION *
 ******************/

test("It should set as true showNav on TOGGLE_SIDENAV action", () => {
  const action = ApplicationActions.toggleSidenav();
  const state = defaultState;
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showNav).toBe(true);
  expect(updatedState.showDetail).toBe(false);
  expect(updatedState.user).toBe(state.user);
});

test("It should set as false showNav on TOGGLE_SIDENAV action", () => {
  const action = ApplicationActions.toggleSidenav();
  const state = { ...defaultState, showNav: true };
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showNav).toBe(false);
  expect(updatedState.showDetail).toBe(state.showDetail);
  expect(updatedState.user).toBe(state.user);
});

test("It should close the navbar and the detail view on CLOSE_DETAIL action", () => {
  const action = ApplicationActions.closeDetail();
  const state = defaultState;
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showNav).toBe(false);
  expect(updatedState.showDetail).toBe(false);
  expect(updatedState.user).toBe(state.user);
});

/******************
 *  DATA FETCHING  *
 ******************/

test("It should set the fetched user's id as the user on DATA_FETCH_SUCCESS action", () => {
  const action = ApplicationActions.dataFetchSuccess({ user: { _id: 1 } });
  const state = defaultState;
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showNav).toBe(state.showNav);
  expect(updatedState.showDetail).toBe(state.showDetail);
  expect(updatedState.user).toBe(1);
});

/******************
 *    LOCATION    *
 ******************/

test("It should close all on LOCATION_CHANGE if the path isn't /messages/:id", () => {
  const action = {
    type: LOCATION_CHANGE,
    payload: { pathname: "/messages" }
  };
  const state = defaultState;
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showNav).toBe(false);
  expect(updatedState.showDetail).toBe(false);
  expect(updatedState.user).toBe(state.user);
});

test("It should open the details on LOCATION_CHANGE if the path is /messages/:id", () => {
  const action = {
    type: LOCATION_CHANGE,
    payload: { pathname: "/messages/1" }
  };
  const state = defaultState;
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showNav).toBe(false);
  expect(updatedState.showDetail).toBe(true);
  expect(updatedState.user).toBe(state.user);
});

/******************
 *    MESSAGES    *
 ******************/

test("It should close the navbar and open the detail on SET_ACTIVE_MESSAGE action", () => {
  const action = MessagesActions.setActiveMessage(1);
  const state = defaultState;
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showNav).toBe(false);
  expect(updatedState.showDetail).toBe(true);
  expect(updatedState.user).toBe(state.user);
});
