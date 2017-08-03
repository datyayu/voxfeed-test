import { MessagesSelectors } from "./messages";

/******************
 *     MOCKS      *
 ******************/

const mockMessage = {
  _id: 0,
  userId: 1,
  campaignId: 1,
  date: "19 Oct 2014",
  content: "hello",
  image: "/assets/msg_img.png",
  results: {}
};

const mockState = {
  messages: {
    active: 1,
    searchQuery: "",
    read: [1],
    messages: {
      1: { ...mockMessage, _id: 1, content: "hello" },
      2: { ...mockMessage, _id: 2, content: "hey" },
      3: { ...mockMessage, _id: 3, content: "hi" }
    }
  },
  campaigns: {
    campaigns: {
      1: { brand: "test-campaign" }
    }
  },
  users: {
    users: {
      1: { name: "test-user" }
    }
  }
};

/******************
 *     TESTS      *
 ******************/

/**
  * _getMessageData
  */
describe("_getMessageData", () => {
  it("should return a message with all its data filled", () => {
    const state = mockState;
    const result = MessagesSelectors._getMessageData(state, 1);

    expect(result).toEqual({
      campaign: { brand: "test-campaign", id: 1 },
      content: "hello",
      date: "19 Oct 2014",
      id: 1,
      image: "/assets/msg_img.png",
      isActive: true,
      read: true,
      results: {},
      user: { id: 1, name: "test-user" }
    });
  });

  it("should return undefined if no message was found", () => {
    const state = mockState;
    const result = MessagesSelectors._getMessageData(state, 99);

    expect(result).toBe(undefined);
  });
});

/**
  * getActiveMessage
  */

describe("getActiveMessage", () => {
  it("should return the active message", () => {
    const state = mockState;
    const result = MessagesSelectors.getActiveMessage(state);

    expect(result).toEqual({
      campaign: { brand: "test-campaign", id: 1 },
      content: "hello",
      date: "19 Oct 2014",
      id: 1,
      image: "/assets/msg_img.png",
      isActive: true,
      read: true,
      results: {},
      user: { id: 1, name: "test-user" }
    });
  });

  it("should return undefined if no message is active", () => {
    const state = {
      ...mockState,
      messages: {
        ...mockState.messages,
        active: -1
      }
    };
    const result = MessagesSelectors.getActiveMessage(state);

    expect(result).toBe(undefined);
  });
});

/**
 * getMessages
 */

describe("getMessages", () => {
  it("should return all the messages", () => {
    const state = mockState;
    const result = MessagesSelectors.getMessages(state);

    expect(result.length).toEqual(3);
    expect(result[0]).toEqual({
      campaign: { brand: "test-campaign", id: 1 },
      content: "hello",
      date: "19 Oct 2014",
      id: 1,
      image: "/assets/msg_img.png",
      isActive: true,
      read: true,
      results: {},
      user: { id: 1, name: "test-user" }
    });
  });

  it("should only return the matched by the search query", () => {
    const state = {
      ...mockState,
      messages: {
        ...mockState.messages,
        searchQuery: "hel"
      }
    };
    const result = MessagesSelectors.getMessages(state);

    expect(result.length).toEqual(1);
  });
});

/**
 * getNotificationCount
 */

describe("getNotificationCount", () => {
  it("should return the proper notification count", () => {
    const state = {
      messages: {
        read: [2],
        messages: {
          1: {},
          2: {},
          3: {}
        }
      }
    };
    const result = MessagesSelectors.getNotificationCount(state);

    expect(result).toBe(2);
  });
});

/**
 * getSearchQuery
 */

describe("getSearchQuery", () => {
  it("should return the specified user", () => {
    const state = {
      messages: { searchQuery: "test" }
    };
    const result = MessagesSelectors.getSearchQuery(state);

    expect(result).toBe("test");
  });
});
