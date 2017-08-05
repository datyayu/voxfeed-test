import PropTypes from "prop-types";

export const UserPropType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  followers: PropTypes.number,
  joinedDate: PropTypes.string
});

export const MockUser = {
  id: 1,
  name: "test-user",
  avatarUrl: "/assets/avatar.jpg",
  followers: 100,
  joinedDate: "jun 2015"
};
