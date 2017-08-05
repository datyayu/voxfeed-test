import PropTypes from "prop-types";

export const CampaignPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  groupAd: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
});

export const MockCampaign = {
  id: 2,
  brand: "test brand",
  groupAd: "Test campaign",
  logo: "/assets/campaign.jpg"
};
