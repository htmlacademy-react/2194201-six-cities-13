import { createAction } from '@reduxjs/toolkit';
import {
  Card,
  CityNames,
  SortNames,
  AuthorizationStatuses,
  AppRoutes,
  OfferCard,
  Review,
} from '../types';

const loadOffers = createAction<Card[]>('offers/fetch');
const requireAuthorization = createAction<AuthorizationStatuses>(
  'user/requireAuthorization'
);
const setActiveOffer = createAction<OfferCard>('setUser');
const loadOffersNearby = createAction<OfferCard[]>('offers/loadOffersNearby');
const loadOfferReviews = createAction<Review[]>('reviews/loadOfferReviews');
const changeActiveCity = createAction<CityNames>('offers/changeActiveCity');
const changeActiveSort = createAction<SortNames>('offers/changeActiveSort');
const setOffersLoadingStatus = createAction<boolean>(
  'data/setOffersLoadingStatus'
);
const setUserEmail = createAction<string | null>('user/setUserEmail');
const setError = createAction<string | null>('app/setError');
const redirectToRoute = createAction<AppRoutes>('app/redirectToRoute');

export {
  loadOffers,
  requireAuthorization,
  setActiveOffer,
  loadOffersNearby,
  loadOfferReviews,
  changeActiveCity,
  changeActiveSort,
  setOffersLoadingStatus,
  setUserEmail,
  setError,
  redirectToRoute,
};
