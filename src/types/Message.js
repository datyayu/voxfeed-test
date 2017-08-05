import PropTypes from "prop-types";
import { UserPropType } from "./User";
import { CampaignPropType } from "./Campaign";

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
