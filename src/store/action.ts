import { createAction } from '@reduxjs/toolkit';
import { Card, AppRoutes, OfferCard, Review } from '../types';

const loadOffers = createAction<Card[]>('offers/fetch');
const setActiveOffer = createAction<OfferCard>('setUser');
const loadOffersNearby = createAction<OfferCard[]>('offers/loadOffersNearby');
const loadOfferReviews = createAction<Review[]>('reviews/loadOfferReviews');
const setOffersLoadingStatus = createAction<boolean>(
  'data/setOffersLoadingStatus'
);
const setUserEmail = createAction<string | null>('user/setUserEmail');
const setError = createAction<string | null>('app/setError');
const redirectToRoute = createAction<AppRoutes>('app/redirectToRoute');

export {
  loadOffers,
  setActiveOffer,
  loadOffersNearby,
  loadOfferReviews,
  setOffersLoadingStatus,
  setUserEmail,
  setError,
  redirectToRoute,
};
