import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  Card,
  FavoriteData,
  Review,
  ReviewValues,
  ThunkConfig,
  User,
} from '../types';
import { saveToken, dropToken } from '../services/token';
import { AuthData, UserData, OfferCard } from '../types';
import { store } from '../store';
import { redirectToRoute } from './action';
import { TIMEOUT_SHOW_ERROR, APIRoute, AppRoute } from '../constants';
import { setError } from './app-process/app-process';
import { AxiosError } from 'axios';
import { processErrorHandle } from '../services/process-error-handle';

const clearErrorAction = createAsyncThunk('app/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

const fetchOffersAction = createAsyncThunk<Card[], undefined, ThunkConfig>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api
      .get<Card[]>(APIRoute.Offers)
      .catch((error: AxiosError) => {
        processErrorHandle(error.message);
        throw error.message;
      });
    return data;
  }
);

const fetchActiveOfferAction = createAsyncThunk<OfferCard, string, ThunkConfig>(
  'data/fetchActiveOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api
      .get<OfferCard>(`${APIRoute.Offers}/${offerId}`)
      .catch((error: AxiosError) => {
        processErrorHandle(error.message);
        throw error.message;
      });
    return data;
  }
);

const fetchOffersNearbyAction = createAsyncThunk<
  OfferCard[],
  string,
  ThunkConfig
>('data/fetchOfferNearby', async (offerId, { extra: api }) => {
  const { data } = await api
    .get<OfferCard[]>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`)
    .catch((error: AxiosError) => {
      processErrorHandle(error.message);
      throw error.message;
    });
  return data;
});

const fetchFavoritesAction = createAsyncThunk<Card[], undefined, ThunkConfig>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api
      .get<Card[]>(APIRoute.Favorite)
      .catch((error: AxiosError) => {
        processErrorHandle(error.message);
        throw error.message;
      });

    return data;
  }
);

const changeFavoriteStatusAction = createAsyncThunk<
  OfferCard,
  FavoriteData,
  ThunkConfig
>('data/postFavorite', async ({ offerId, status }, { extra: api }) => {
  const { data } = await api
    .post<OfferCard>(`${APIRoute.Favorite}/${offerId}/${status}`)
    .catch((error: AxiosError) => {
      processErrorHandle(error.message);
      throw error.message;
    });

  return data;
});

const fetchReviewsAction = createAsyncThunk<Review[], string, ThunkConfig>(
  'data/fetchReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api
      .get<Review[]>(`${APIRoute.Reviews}/${offerId}`)
      .catch((error: AxiosError) => {
        processErrorHandle(error.message);
        throw error.message;
      });
    return data;
  }
);

const postReviewAction = createAsyncThunk<Review, ReviewValues, ThunkConfig>(
  'data/postReview',
  async ({ id, rating, comment }, { extra: api }) => {
    const { data } = await api
      .post<Review>(`${APIRoute.Reviews}/${id}`, {
        comment,
        rating,
      })
      .catch((error: AxiosError) => {
        processErrorHandle(error.message);
        throw error.message;
      });

    return data;
  }
);

const checkAuthAction = createAsyncThunk<
  User & UserData,
  undefined,
  ThunkConfig
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api
    .get<User & UserData>(APIRoute.Login)
    .catch((error: AxiosError) => {
      processErrorHandle(error.message);
      throw error.message;
    });
  return data;
});

const loginAction = createAsyncThunk<User & UserData, AuthData, ThunkConfig>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api
      .post<User & UserData>(APIRoute.Login, {
        email,
        password,
      })
      .catch((error: AxiosError) => {
        processErrorHandle(error.message);
        throw error.message;
      });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  }
);

const logoutAction = createAsyncThunk<void, undefined, ThunkConfig>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout).catch((error: AxiosError) => {
      processErrorHandle(error.message);
      throw error.message;
    });
    dropToken();
  }
);

export {
  clearErrorAction,
  fetchOffersAction,
  fetchActiveOfferAction,
  fetchOffersNearbyAction,
  fetchFavoritesAction,
  changeFavoriteStatusAction,
  fetchReviewsAction,
  postReviewAction,
  checkAuthAction,
  loginAction,
  logoutAction,
};
