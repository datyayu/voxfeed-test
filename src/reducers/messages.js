import { ApplicationActions, MessagesActions } from "../actions";
import { LOCATION_CHANGE } from "react-router-redux";
import { matchPath } from "react-router";

const initialState = {
  messages: {
    0: {
      userId: 1,
      campaignId: 1,
      date: "19 Oct 2014",
      content:
        "En #MiCombiSqualo, haría las mejores fiestas del mundo. ¿Te quieres ganar la tuya? voxfd.co/ZK69Es",
      results: {
        clicks: {
          total: 256,
          unique: 200,
          payed: 145
        },
        retweets: 2138,
        replys: 478
      },
      entities: {
        hashtags: ["#MiCombiSqualo"],
        urls: ["voxfd.co/ZK69Es"]
      }
    },
    1: {
      userId: 1,
      campaignId: 1,
      date: "19 Oct 2014",
      content: "Just #coding stuff... http://instagram.com/p/uENgADtakT/",
      results: {
        clicks: {
          total: 122,
          unique: 20,
          payed: 11
        },
        retweets: 233,
        replys: 321
      },
      entitites: {
        hashtags: ["#coding"],
        urls: ["http://instagram.com/p/uENgADtakT/"]
      }
    },
    2: {
      userId: 1,
      campaignId: 1,
      date: "19 Oct 2014",
      content:
        "Quiero tener #MiCombiSqualo sólo para ponerle unos dados de peluche en el retrovisor. ¿No quieres una igual? vxfd.co/1zhZIZp",
      results: {
        clicks: {
          total: 1236,
          unique: 600,
          payed: 545
        },
        retweets: 31242,
        replys: 478
      },
      entities: {
        hashtags: ["#MiCombiSqualo"],
        urls: ["voxfd.co/1zhZIZp"]
      }
    },
    3: {
      userId: 1,
      campaignId: 2,
      date: "18 Oct 2014",
      content:
        "Ni modo que no empieze la escuela con un smartphone chipocludo!! #TelcelBackToSchool vxfd.co/wef32",
      results: {
        clicks: {
          total: 1000000,
          unique: 50000,
          payed: 2400
        },
        retweets: 331212,
        replys: 3233
      },
      entities: {
        hashtags: ["#TelcelBackToSchool"],
        urls: ["voxfd.co/wef32"]
      }
    }
  },
  searchQuery: "",
  read: [],
  active: -1
};

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case MessagesActions.CHANGE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };

    case ApplicationActions.CLOSE_DETAIL:
      return {
        ...state,
        active: -1
      };

    case LOCATION_CHANGE:
      const location = action.payload;
      const match = matchPath(location.pathname, {
        path: "/messages/:id"
      });

      if (!match) {
        return state;
      }

      const messageId = match.params.id;

      return {
        ...state,
        active: messageId,
        read: state.read.some(id => id === messageId)
          ? state.read
          : [...state.read, messageId]
      };

    default:
      return state;
  }
}
