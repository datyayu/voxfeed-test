import { LOCATION_CHANGE } from "react-router-redux";
import { applicationReducer } from "./application";
import { ApplicationActions, MessagesActions } from "../actions";

const defaultState = {
  hasError: false,
  isFetching: false,
  showDetail: false,
  showNav: false,
  user: null
};

/******************
 * APP NAVIGATION *
 ******************/

test("It should set as true showNav on TOGGLE_SIDENAV action", () => {
  const action = ApplicationActions.toggleSidenav();
  const state = defaultState;
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showDetail).toBe(false);
  expect(updatedState.showNav).toBe(true);
  expect(updatedState.hasError).toBe(state.hasError);
  expect(updatedState.isFetching).toBe(state.isFetching);
  expect(updatedState.user).toBe(state.user);
});

test("It should set as false showNav on TOGGLE_SIDENAV action", () => {
  const action = ApplicationActions.toggleSidenav();
  const state = { ...defaultState, showNav: true };
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showNav).toBe(false);
  expect(updatedState.hasError).toBe(state.hasError);
  expect(updatedState.isFetching).toBe(state.isFetching);
  expect(updatedState.showDetail).toBe(state.showDetail);
  expect(updatedState.user).toBe(state.user);
});

test("It should set as true showNav on OPEN_SIDENAV action", () => {
  const action = ApplicationActions.openSidenav();
  const state = defaultState;
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showNav).toBe(true);
  expect(updatedState.hasError).toBe(state.hasError);
  expect(updatedState.isFetching).toBe(state.isFetching);
  expect(updatedState.showDetail).toBe(state.showDetail);
  expect(updatedState.user).toBe(state.user);
});

test("It should set as false showNav on CLOSE_SIDENAV action", () => {
  const action = ApplicationActions.closeSidenav();
  const state = { ...defaultState, showNav: true };
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showNav).toBe(false);
  expect(updatedState.hasError).toBe(state.hasError);
  expect(updatedState.isFetching).toBe(state.isFetching);
  expect(updatedState.showDetail).toBe(state.showDetail);
  expect(updatedState.user).toBe(state.user);
});

test("It should close the navbar and the detail view on CLOSE_DETAIL action", () => {
  const action = ApplicationActions.closeDetail();
  const state = defaultState;
  const updatedState = applicationReducer(state, action);

  expect(updatedState.showNav).toBe(false);
  expect(updatedState.showDetail).toBe(false);
  expect(updatedState.hasError).toBe(state.hasError);
  expect(updatedState.isFetching).toBe(state.isFetching);
  expect(updatedState.user).toBe(state.user);
});

/******************
 *  DATA FETCHING  *
 ******************/

test("It should start fetching on FETCH_DATA action", () => {
  const action = ApplicationActions.fetchData();
  const state = { ...defaultState, hasError: true };
  const updatedState = applicationReducer(state, action);

  expect(updatedState.hasError).toBe(false);
  expect(updatedState.isFetching).toBe(true);
  expect(updatedState.showDetail).toBe(state.showDetail);
  expect(updatedState.showNav).toBe(state.showNav);
  expect(updatedState.user).toBe(state.user);
});

test("It should set the fetched user's id as the user on DATA_FETCH_SUCCESS action", () => {
  const action = ApplicationActions.dataFetchSuccess({ user: { _id: 1 } });
  const state = { ...defaultState, isFetching: true };
  const updatedState = applicationReducer(state, action);

  expect(updatedState.hasError).toBe(false);
  expect(updatedState.isFetching).toBe(false);
  expect(updatedState.user).toBe(1);
  expect(updatedState.showDetail).toBe(state.showDetail);
  expect(updatedState.showNav).toBe(state.showNav);
});

test("It should acknowledge an error while fetching on DATA_FETCH_FAIL action", () => {
  const action = ApplicationActions.dataFetchFail();
  const state = { ...defaultState, isFetching: true };
  const updatedState = applicationReducer(state, action);

  expect(updatedState.hasError).toBe(true);
  expect(updatedState.isFetching).toBe(false);
  expect(updatedState.showDetail).toBe(state.showDetail);
  expect(updatedState.showNav).toBe(state.showNav);
  expect(updatedState.user).toBe(state.user);
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
  expect(updatedState.hasError).toBe(state.hasError);
  expect(updatedState.isFetching).toBe(state.isFetching);
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
  expect(updatedState.hasError).toBe(state.hasError);
  expect(updatedState.isFetching).toBe(state.isFetching);
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
  expect(updatedState.hasError).toBe(state.hasError);
  expect(updatedState.isFetching).toBe(state.isFetching);
  expect(updatedState.user).toBe(state.user);
});
