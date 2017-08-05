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
   * Get the application error if there's one.
   *
   * @param {Object} state Application state
   * @returns {(String|null)} The error, or null if no error was found.
   */
  static hasFetchingFailed(state) {
    return state.application.hasError;
  }

  /**
   * Get whether the detail panel should be or not active.
   *
   * @param {Object} state Application state
   * @returns {Boolean} Whether the detail panel is active.
   */
  static isDetailActive(state) {
    return state.application.showDetail;
  }

  /**
   * Get whether the application is or not fetching data.
   *
   * @param {Object} state Application state
   * @returns {Boolean} Whether the application is fetching data.
   */
  static isFetchingData(state) {
    return state.application.isFetching;
  }

  /**
   * Get whether the sidenav should be or not active
   * on mobile.
   *
   * @param {Object} state Application state
   * @returns {Boolean} Whether the sidenav is active.
   */
  static isSidenavActive(state) {
    return state.application.showNav;
  }
}
