export class ApplicationActions {
  static TOGGLE_SIDENAV = "application/TOGGLE_SIDENAV";
  static toggleSidenav() {
    return { type: ApplicationActions.TOGGLE_SIDENAV };
  }

  static CLOSE_DETAIL = "application/CLOSE_DETAIL";
  static closeDetail() {
    return { type: ApplicationActions.CLOSE_DETAIL };
  }
}
