export class ApplicationActions {
  static TOGGLE_SIDENAV = "application/TOGGLE_SIDENAV";
  static toggleSidenav() {
    return { type: ApplicationActions.TOGGLE_SIDENAV };
  }

  static TOGGLE_DETAIL = "application/TOGGLE_DETAIL";
  static toggleDetail() {
    return { type: ApplicationActions.TOGGLE_DETAIL };
  }
}
