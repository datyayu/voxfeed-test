export class ApplicationSelectors {
  static isSidenavActive(state) {
    return state.application.showNav;
  }

  static isDetailActive(state) {
    return state.application.showDetail;
  }

  static getCurrentUser(state) {
    const userId = state.application.user;
    return state.users.users[userId];
  }
}
