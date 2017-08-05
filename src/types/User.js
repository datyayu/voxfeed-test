import PropTypes from "prop-types";

export const UserPropType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  followers: PropTypes.number,
  joinedDate: PropTypes.string
});
