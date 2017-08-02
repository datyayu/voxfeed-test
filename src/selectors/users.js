export class UsersSelectors {
  static getUser(state, id) {
    const users = state.users.users;
    return { ...users[id], id };
  }
}
