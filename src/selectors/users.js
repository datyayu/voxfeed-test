/**
 * User-related selectors
 */
export class UsersSelectors {
  /**
   * Get the specified user's info.
   *
   * @param {Object} state Application state.
   * @param {Number} id User's id.
   * @returns {Object|undefined} The specified campaign or undefined if not found.
   */
  static getUser(state, id) {
    const users = state.users.users;
    const user = users[id];

    return user && { ...user, id };
  }
}
