export class ApplicationSelectors {
  static isSidenavActive(state) {
    return state.application.showNav;
  }

  static isDetailActive(state) {
    return state.application.showDetail;
  }
}
