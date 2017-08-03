/**
 * Application global-level selectors.
 */
export class ApplicationSelectors {
  /**
   * Get the current application user.
   *
   * @param {Object} state Application state
   * @returns {(Object|undefined)} The user, or undefined if no user is active.
   */
  static getCurrentUser(state) {
    const userId = state.application.user;
    return state.users.users[userId];
  }

  /**
   * Get wheter the detail panel should be or not active.
   *
   * @param {Object} state Application state
   * @returns {Boolean} Wheter the detail panel is active.
   */
  static isDetailActive(state) {
    return state.application.showDetail;
  }

  /**
   * Get wheter the sidenav should be or not active
   * on mobile.
   *
   * @param {Object} state Application state
   * @returns {Boolean} Wheter the sidenav is active.
   */
  static isSidenavActive(state) {
    return state.application.showNav;
  }
}
