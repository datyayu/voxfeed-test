import { MessagesActions } from "./messages";

/******************
 *     SEARCH     *
 ******************/

test("changeSearchQuery() should create a CHANGE_SEARCH_QUERY action", () => {
  const action = MessagesActions.changeSearchQuery("hello");

  expect(action.type).toBe(MessagesActions.CHANGE_SEARCH_QUERY);
  expect(action.payload).toBe("hello");
});

/******************
 *   NAVIGATION   *
 ******************/

test("setActiveMessage() should create a SET_ACTIVE_MESSAGE action", () => {
  const action = MessagesActions.setActiveMessage(1);

  expect(action.type).toBe(MessagesActions.SET_ACTIVE_MESSAGE);
  expect(action.payload).toBe(1);
});
