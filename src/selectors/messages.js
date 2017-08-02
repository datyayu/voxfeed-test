import { UsersSelectors } from "./users";
import { CampaignsSelectors } from "./campaigns";

export class MessagesSelectors {
  static getMessageData(state) {
    return messageId => {
      const message = state.messages.messages[messageId];
      const activeMessage = state.messages.active;
      const readMessages = state.messages.read;

      return {
        id: messageId,
        campaign: CampaignsSelectors.getCampaign(state, message.campaignId),
        content: message.content,
        date: message.date,
        isActive: messageId === activeMessage,
        read: readMessages.some(entryId => entryId === messageId),
        results: message.results,
        user: UsersSelectors.getUser(state, message.userId)
      };
    };
  }

  static getActiveMessage(state) {
    const activeMessageId = state.messages.active;
    if (activeMessageId === -1) return;

    const message = this.getMessageData(state)(activeMessageId);

    return message;
  }

  static getSearchQuery(state) {
    return state.messages.searchQuery;
  }

  static getNotificationCount(state) {
    const messages = Object.keys(state.messages.messages);
    const readMessages = state.messages.read;

    return messages.length - readMessages.length;
  }

  static getMessages(state) {
    const messages = state.messages.messages;
    const filterQuery = state.messages.searchQuery;

    const updatedMessages = Object.keys(messages)
      .map(this.getMessageData(state))
      .filter(message => {
        return (
          message.content.toLowerCase().includes(filterQuery) ||
          message.user.name.toLowerCase().includes(filterQuery)
        );
      });

    return updatedMessages;
  }
}
