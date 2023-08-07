import { NameSpace, AuthorizationStatus } from '../../constants';
import { State, AuthorizationStatuses, UserData } from '../../types';

export const selectAuthStatus = (state: State): AuthorizationStatuses =>
  state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUser = (state: State): UserData | null =>
  state[NameSpace.User].user;
