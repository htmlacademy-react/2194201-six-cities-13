import { createAsyncThunk } from '@reduxjs/toolkit';
import { Card, Review, ReviewValues, AxiosData } from '../types';
import { saveToken, dropToken } from '../services/token';
import { AuthData, UserData, OfferCard } from '../types';
import { store } from '../store';
import { setError, setUserEmail, redirectToRoute } from './action';
import { TIMEOUT_SHOW_ERROR, APIRoute, AppRoute } from '../constants';

const clearErrorAction = createAsyncThunk('app/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

const fetchOffersAction = createAsyncThunk<Card[], undefined, AxiosData>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Card[]>(APIRoute.Offers);
    return data;
  }
);

const fetchActiveOfferAction = createAsyncThunk<OfferCard, string, AxiosData>(
  'data/fetchActiveOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OfferCard>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

const fetchOffersNearbyAction = createAsyncThunk<
  OfferCard[],
  string,
  AxiosData
>('data/fetchOfferNearby', async (offerId, { extra: api }) => {
  const { data } = await api.get<OfferCard[]>(
    `${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`
  );
  return data;
});

const fetchReviewsAction = createAsyncThunk<Review[], string, AxiosData>(
  'data/fetchReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  }
);

export const postReviewAction = createAsyncThunk<
  Review[],
  ReviewValues,
  AxiosData
>('data/postReview', async ({ id, rating, comment }, { extra: api }) => {
  const { data } = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, {
    comment,
    rating,
  });
  return data;
});

const checkAuthAction = createAsyncThunk<void, undefined, AxiosData>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const {
      data: { email },
    } = await api.get<{ email: string }>(APIRoute.Login);
    dispatch(setUserEmail(email));
  }
);

const loginAction = createAsyncThunk<void, AuthData, AxiosData>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(setUserEmail(email));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

const logoutAction = createAsyncThunk<void, undefined, AxiosData>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setUserEmail(null));
  }
);

export {
  clearErrorAction,
  fetchOffersAction,
  fetchActiveOfferAction,
  fetchOffersNearbyAction,
  fetchReviewsAction,
  checkAuthAction,
  loginAction,
  logoutAction,
};
