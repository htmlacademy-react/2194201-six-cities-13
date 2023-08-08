import { NameSpace } from '../../constants';
import { State } from '../../types';

const selectAuthStatus = (state: State) =>
  state[NameSpace.User].authorizationStatus;
const selectUser = (state: State) => state[NameSpace.User].user;

export { selectAuthStatus, selectUser };
