import PropTypes from "prop-types";

export const CampaignPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  groupAd: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
});
