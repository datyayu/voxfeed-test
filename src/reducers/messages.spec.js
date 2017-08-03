import { messagesReducer } from "./messages";
import { ApplicationActions, MessagesActions } from "../actions";
import { LOCATION_CHANGE } from "react-router-redux";

const defaultState = {
  messages: {},
  searchQuery: "",
  read: [],
  active: -1
};

/******************
 * APP NAVIGATION *
 ******************/

test("It shoul unset the active message on CLOSE_DETAIL action", () => {
  const action = ApplicationActions.closeDetail();
  const state = defaultState;
  const updatedState = messagesReducer(state, action);

  expect(updatedState.active).toEqual(-1);
  expect(updatedState.messages).toEqual(state.messages);
  expect(updatedState.searchQuery).toBe(state.searchQuery);
  expect(updatedState.read).toEqual(state.read);
});

/******************
 * DATA FETCHING  *
 ******************/

test("It should reset the messages on FETCH_DATA action", () => {
  const action = ApplicationActions.fetchData();
  const state = defaultState;
  const updatedState = messagesReducer(state, action);

  expect(updatedState.messages).toEqual({});
  expect(updatedState.searchQuery).toBe(state.searchQuery);
  expect(updatedState.read).toEqual(state.read);
  expect(updatedState.active).toEqual(state.active);
});

test("It should set the messages on DATA_FETCH_SUCCESS action", () => {
  const action = ApplicationActions.dataFetchSuccess({
    tweets: [
      { _id: 1, userId: 1, content: "test" },
      { _id: 2, userId: 2, content: "test" }
    ]
  });
  const state = defaultState;
  const updatedState = messagesReducer(state, action);

  expect(updatedState.messages).toEqual({
    1: { _id: 1, userId: 1, content: "test" },
    2: { _id: 2, userId: 2, content: "test" }
  });
  expect(updatedState.searchQuery).toBe(state.searchQuery);
  expect(updatedState.read).toEqual(state.read);
  expect(updatedState.active).toEqual(state.active);
});

/******************
 *    LOCATION    *
 ******************/

test("It should set the active message on LOCATION_CHANGE if it path is /messages/:id", () => {
  const action = {
    type: LOCATION_CHANGE,
    payload: { pathname: "/messages/1" }
  };
  const state = defaultState;
  const updatedState = messagesReducer(state, action);

  expect(updatedState.messages).toEqual(state.messages);
  expect(updatedState.searchQuery).toBe(state.searchQuery);
  expect(updatedState.read).toEqual([...state.read, 1]);
  expect(updatedState.active).toEqual(1);
});

test("It should reset the active message on LOCATION_CHANGE if path isn't /messages/:id", () => {
  const action = {
    type: LOCATION_CHANGE,
    payload: { pathname: "/messages" }
  };
  const state = defaultState;
  const updatedState = messagesReducer(state, action);

  expect(updatedState.messages).toEqual(state.messages);
  expect(updatedState.searchQuery).toBe(state.searchQuery);
  expect(updatedState.read).toEqual(state.read);
  expect(updatedState.active).toEqual(-1);
});

/******************
 *     SEARCH     *
 ******************/

test("It shoul update the search query on CHANGE_SEARCH_QUERY action", () => {
  const action = MessagesActions.changeSearchQuery("test");
  const state = defaultState;
  const updatedState = messagesReducer(state, action);

  expect(updatedState.searchQuery).toBe("test");
  expect(updatedState.messages).toEqual(state.messages);
  expect(updatedState.read).toEqual(state.read);
  expect(updatedState.active).toEqual(state.active);
});
