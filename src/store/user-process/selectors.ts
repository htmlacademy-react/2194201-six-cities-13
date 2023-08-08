import { NameSpace } from '../../constants';
import { State, AuthorizationStatuses, UserData } from '../../types';

const selectAuthStatus = (state: State): AuthorizationStatuses =>
  state[NameSpace.User].authorizationStatus;
const selectUser = (state: State): UserData | null =>
  state[NameSpace.User].user;

export { selectAuthStatus, selectUser };
