import { UsersSelectors } from "./users";
import { CampaignsSelectors } from "./campaigns";

/**
 * Message-related selectors.
 */
export class MessagesSelectors {
  /**
   * Fill the data for a message.
   *
   * @param {Object} state Application state.
   * @returns {Function} The specified id's message with its data filled.
   */
  static _getMessageData(state, id) {
    const messageId = parseInt(id, 10);
    const message = state.messages.messages[messageId];
    const activeMessage = state.messages.active;
    const readMessages = state.messages.read;

    if (!message) {
      return undefined;
    }

    return {
      id: messageId,
      campaign: CampaignsSelectors.getCampaign(state, message.campaignId),
      content: message.content,
      date: message.date,
      image: message.image,
      isActive: messageId === activeMessage,
      read: readMessages.some(entryId => entryId === messageId),
      results: message.results,
      user: UsersSelectors.getUser(state, message.userId)
    };
  }

  /**
   * Get the active message data.
   *
   * @param {Object} state Application state.
   * @returns {Object|undefined} Active message or undefined if there isn't
   *                             an active message or there was no match found.
   */
  static getActiveMessage(state) {
    const activeMessageId = state.messages.active;
    if (activeMessageId === -1) return;

    const message = this._getMessageData(state, activeMessageId);

    return message;
  }

  /**
   * Get all the messages.
   *
   * @param {Object} state Application state.
   * @returns {Object[]} List of messages.
   */
  static getMessages(state) {
    const messages = state.messages.messages;
    const filterQuery = state.messages.searchQuery;

    const updatedMessages = Object.keys(messages)
      // Fill info.
      .map(id => this._getMessageData(state, id))
      // Get only messages matching the search query.
      .filter(message => {
        if (!message || !message.content || !message.user) {
          return false;
        }

        return (
          message.content.toLowerCase().includes(filterQuery) ||
          message.user.name.toLowerCase().includes(filterQuery)
        );
      });

    return updatedMessages;
  }

  /**
   * Get the unread messages notification count.
   *
   * @param {Object} state Application state
   * @return {Number} Number of unread messages.
   */
  static getNotificationCount(state) {
    const messages = Object.keys(state.messages.messages);
    const readMessages = state.messages.read;

    return messages.length - readMessages.length;
  }

  /**
   * Get the message filter/search query value.
   *
   * @param {Object} state Application state.
   * @returns {String} Query value.
   */
  static getSearchQuery(state) {
    return state.messages.searchQuery;
  }
}
