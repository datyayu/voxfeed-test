import { ApplicationActions } from "./application";

/******************
 * APP NAVIGATION *
 ******************/

test("toggleSidenav() should create a TOGGLE_SIDENAV action", () => {
  const action = ApplicationActions.toggleSidenav();

  expect(action.type).toBe(ApplicationActions.TOGGLE_SIDENAV);
});

test("openSidenav() should create a OPEN_SIDENAV action", () => {
  const action = ApplicationActions.openSidenav();

  expect(action.type).toBe(ApplicationActions.OPEN_SIDENAV);
});

test("closeSidenav() should create a CLOSE_SIDENAV action", () => {
  const action = ApplicationActions.closeSidenav();

  expect(action.type).toBe(ApplicationActions.CLOSE_SIDENAV);
});

test("closeDetail() should create a CLOSE_DETAIL action", () => {
  const action = ApplicationActions.closeDetail();

  expect(action.type).toBe(ApplicationActions.CLOSE_DETAIL);
});

/******************
 * DATA FETCHING  *
 ******************/

test("fetchData() should create a FETCH_DATA action", () => {
  const action = ApplicationActions.fetchData();

  expect(action.type).toBe(ApplicationActions.FETCH_DATA);
});

test("dataFetchSuccess() should create a DATA_FETCH_SUCCESS action", () => {
  const action = ApplicationActions.dataFetchSuccess({ content: "test" });

  expect(action.type).toBe(ApplicationActions.DATA_FETCH_SUCCESS);
  expect(action.payload).toEqual({ content: "test" });
});

test("dataFetchFail() should create a DATA_FETCH_FAIL action", () => {
  const action = ApplicationActions.dataFetchFail("Error");

  expect(action.type).toBe(ApplicationActions.DATA_FETCH_FAIL);
});
