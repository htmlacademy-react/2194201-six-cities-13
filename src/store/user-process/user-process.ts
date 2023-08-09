import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus, Status } from '../../constants';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { AuthorizationStatuses, User, UserData } from '../../types';

type UserProcess = {
  authorizationStatus: AuthorizationStatuses;
  user: (User & UserData) | null;
  statusAuth: string;
  statusLogin: string;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  statusAuth: Status.Idle,
  statusLogin: Status.Idle,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.statusAuth = Status.Loading;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.statusAuth = Status.Success;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.statusAuth = Status.Error;
      })
      .addCase(loginAction.pending, (state) => {
        state.statusLogin = Status.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.statusLogin = Status.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.statusLogin = Status.Error;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  },
});
