import { createAsyncThunk } from '@reduxjs/toolkit';
import { Card, Review, ReviewValues, AxiosData, User } from '../types';
import { saveToken, dropToken } from '../services/token';
import { AuthData, UserData, OfferCard } from '../types';
import { store } from '../store';
import { redirectToRoute } from './action';
import { TIMEOUT_SHOW_ERROR, APIRoute, AppRoute } from '../constants';
import { setError } from './app-process/app-process';

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

const postReviewAction = createAsyncThunk<Review, ReviewValues, AxiosData>(
  'data/postReview',
  async ({ id, rating, comment }, { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Reviews}/${id}`, {
      comment,
      rating,
    });

    return data;
  }
);

const checkAuthAction = createAsyncThunk<User & UserData, undefined, AxiosData>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<User & UserData>(APIRoute.Login);
    return data;
  }
);

const loginAction = createAsyncThunk<User & UserData, AuthData, AxiosData>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<User & UserData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  }
);

const logoutAction = createAsyncThunk<void, undefined, AxiosData>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export {
  clearErrorAction,
  fetchOffersAction,
  fetchActiveOfferAction,
  fetchOffersNearbyAction,
  fetchReviewsAction,
  postReviewAction,
  checkAuthAction,
  loginAction,
  logoutAction,
};
