export class MessagesActions {
  static CHANGE_SEARCH_QUERY = "messages/CHANGE_SEARCH_QUERY";
  static changeSearchQuery(value) {
    return {
      type: MessagesActions.CHANGE_SEARCH_QUERY,
      payload: value
    };
  }

  static SET_ACTIVE_MESSAGE = "messages/SET_ACTIVE_MESSAGE";
  static setActiveMessage(id) {
    return {
      type: MessagesActions.SET_ACTIVE_MESSAGE,
      payload: id
    };
  }
}
