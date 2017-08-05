import PropTypes from "prop-types";
import { UserPropType, MockUser } from "./User";
import { CampaignPropType, MockCampaign } from "./Campaign";

export const MessagePropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
  isActive: PropTypes.bool,
  read: PropTypes.bool,
  results: PropTypes.shape({
    clicks: PropTypes.shape({
      total: PropTypes.number.isRequired,
      unique: PropTypes.number.isRequired,
      payed: PropTypes.number.isRequired
    }).isRequired,
    replies: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired
  }),
  user: UserPropType,
  campaign: CampaignPropType
});

/**
 * FOR TESTS ONLY
 */
export const MockMessage = {
  id: 1,
  date: "jun 2016",
  content: "hello world",
  image: "/assets/image.jpg",
  isActive: false,
  read: false,
  results: {
    clicks: {
      total: 100,
      unique: 50,
      payed: 30
    },
    replies: 10,
    retweets: 25
  },
  user: MockUser,
  campaign: MockCampaign
};
