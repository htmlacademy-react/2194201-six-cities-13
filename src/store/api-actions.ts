import { createAsyncThunk } from '@reduxjs/toolkit';
import { Card, Review, ReviewValues, AxiosData } from '../types';
import { saveToken, dropToken } from '../services/token';
import { AuthData, UserData, OfferCard } from '../types';
import { store } from '../store';
import {
  loadOffers,
  setError,
  setOffersLoadingStatus,
  setUserEmail,
  redirectToRoute,
  setActiveOffer,
  loadOffersNearby,
} from './action';
import { TIMEOUT_SHOW_ERROR, APIRoute, AppRoute } from '../constants';

const clearErrorAction = createAsyncThunk('app/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

const fetchOffersAction = createAsyncThunk<void, undefined, AxiosData>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoadingStatus(true));
    const { data } = await api.get<Card[]>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

const fetchActiveOfferAction = createAsyncThunk<void, string, AxiosData>(
  'data/fetchActiveOffer',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferCard>(`${APIRoute.Offers}/${offerId}`);
    dispatch(setActiveOffer(data));
  }
);

const fetchOffersNearbyAction = createAsyncThunk<void, string, AxiosData>(
  'data/fetchOfferNearby',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferCard[]>(
      `${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`
    );

    dispatch(loadOffersNearby(data));
  }
);

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
