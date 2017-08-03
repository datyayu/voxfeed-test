import { UsersSelectors } from "./users";

/**
 * getUser
 */

describe("getUser", () => {
  it("should return the specified user", () => {
    const state = {
      users: {
        users: {
          1: { name: "test" }
        }
      }
    };
    const result = UsersSelectors.getUser(state, 1);

    expect(result).toEqual({ id: 1, name: "test" });
  });

  it("should return the undefined if the user isn't found", () => {
    const state = {
      users: {
        users: {
          1: { name: "test" }
        }
      }
    };
    const result = UsersSelectors.getUser(state, 2);

    expect(result).toBe(undefined);
  });
});
