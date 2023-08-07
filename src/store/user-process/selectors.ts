import { NameSpace, AuthorizationStatus } from '../../constants';
import { State, AuthorizationStatuses } from '../../types';

export const selectAuthStatus = (state: State): AuthorizationStatuses =>
  state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
