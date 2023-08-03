import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch, Card, Review } from '../types';
import { saveToken, dropToken } from '../services/token';
import { AuthData, UserData, OfferCard } from '../types';
import { store } from './';
import {
  loadOffers,
  requireAuthorization,
  setError,
  setOffersLoadingStatus,
  setUserEmail,
  redirectToRoute,
  setActiveOffer,
  loadOffersNearby,
  loadOfferReviews,
} from './action';
import {
  TIMEOUT_SHOW_ERROR,
  APIRoute,
  AuthorizationStatus,
  AppRoute,
} from '../constants';

const clearErrorAction = createAsyncThunk('app/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersLoadingStatus(true));
  const { data } = await api.get<Card[]>(APIRoute.Offers);
  dispatch(setOffersLoadingStatus(false));
  dispatch(loadOffers(data));
});

const fetchActiveOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchActiveOffer', async (offerId, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferCard>(`${APIRoute.Offers}/${offerId}`);
  dispatch(setActiveOffer(data));
});

const fetchOffersNearbyAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOfferNearby', async (offerId, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferCard[]>(
    `${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`
  );

  dispatch(loadOffersNearby(data));
});

const fetchOfferReviewsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOfferReviews', async (offerId, { dispatch, extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);

  dispatch(loadOfferReviews(data));
});

const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const {
      data: { email },
    } = await api.get<Omit<UserData, 'id' & 'token'>>(APIRoute.Login);
    dispatch(setUserEmail(email));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(setUserEmail(email));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setUserEmail(null));
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export {
  clearErrorAction,
  fetchOffersAction,
  fetchActiveOfferAction,
  fetchOffersNearbyAction,
  fetchOfferReviewsAction,
  checkAuthAction,
  loginAction,
  logoutAction,
};
