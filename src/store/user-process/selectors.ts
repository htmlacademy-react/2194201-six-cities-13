import { NameSpace } from '../../constants';
import { State } from '../../types';

const selectAuthStatus = (state: State) =>
  state[NameSpace.User].authorizationStatus;
const selectUser = (state: State) => state[NameSpace.User].user;
const selectStatusAuth = (state: State) => state[NameSpace.User].statusAuth;
const selectStatusLogin = (state: State) => state[NameSpace.User].statusLogin;

export { selectAuthStatus, selectUser, selectStatusLogin, selectStatusAuth };
