import { NameSpace } from '../../constants';
import { State } from '../../types';

const selectAuthStatus = (state: Pick<State, typeof NameSpace.User>) =>
  state[NameSpace.User].authorizationStatus;
const selectUser = (state: Pick<State, typeof NameSpace.User>) =>
  state[NameSpace.User].user;
const selectStatusLogin = (state: Pick<State, typeof NameSpace.User>) =>
  state[NameSpace.User].statusLogin;

export { selectAuthStatus, selectUser, selectStatusLogin };
