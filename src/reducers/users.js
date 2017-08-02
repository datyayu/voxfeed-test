const initialState = {
  users: {
    1: {
      avatarUrl: "/assets/user.png",
      name: "Manuelmhtr",
      followers: 478,
      joinedDate: "08/12/15"
    }
  }
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
