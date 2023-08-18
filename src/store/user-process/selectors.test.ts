import { NameSpace, Status, AuthorizationStatus } from '../../constants';
import { makeFakeUser } from '../../utils/mocks/user';
import { selectAuthStatus, selectUser, selectStatusLogin } from './selectors';

describe('UserProcess selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: makeFakeUser(),
      statusLogin: Status.Idle,
    },
  };

  it('should return authorization status from state', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = selectAuthStatus(state);
    expect(result).toBe(authorizationStatus);
  });

  it('should return user data from state', () => {
    const { user } = state[NameSpace.User];
    const result = selectUser(state);
    expect(result).toBe(user);
  });

  it('should return status login response from state', () => {
    const { statusLogin } = state[NameSpace.User];
    const result = selectStatusLogin(state);
    expect(result).toBe(statusLogin);
  });
});
