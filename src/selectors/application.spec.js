import { ApplicationSelectors } from "./application";

/**
 * getCurrentUser
 */

describe("getCurrentUser", () => {
  it("should return the current user", () => {
    const state = {
      application: { user: 1 },
      users: {
        users: {
          1: { name: "test" }
        }
      }
    };
    const result = ApplicationSelectors.getCurrentUser(state);

    expect(result).toEqual({ name: "test" });
  });

  it("should return undefined if no user is active", () => {
    const state = {
      application: { user: -1 },
      users: {
        users: {
          1: { name: "test" }
        }
      }
    };
    const result = ApplicationSelectors.getCurrentUser(state);

    expect(result).toBe(undefined);
  });
});

/**
 * isDetailActive
 */

describe("isDetailActive", () => {
  it("should return true if state detail is active", () => {
    const state = { application: { showDetail: true } };
    const result = ApplicationSelectors.isDetailActive(state);

    expect(result).toBe(true);
  });

  it("should return true if state detail isn't active", () => {
    const state = { application: { showDetail: false } };
    const result = ApplicationSelectors.isDetailActive(state);

    expect(result).toBe(false);
  });
});

/**
 * isSidenavActive
 */

describe("isSidenavActive", () => {
  it("should return true if state sidenav is active", () => {
    const state = { application: { showNav: true } };
    const result = ApplicationSelectors.isSidenavActive(state);

    expect(result).toBe(true);
  });

  it("should return true if state sidenav isn't active", () => {
    const state = { application: { showNav: false } };
    const result = ApplicationSelectors.isSidenavActive(state);

    expect(result).toBe(false);
  });
});
