import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, SORT_ITEMS } from '../constants';
import { AppProcess } from '../types';
import {
  loadOffers,
  setError,
  setOffersLoadingStatus,
  setUserEmail,
  setActiveOffer,
  loadOffersNearby,
  loadOfferReviews,
} from './action';

const initialState: AppProcess = {
  offers: [],
  activeOffer: null,
  offersNearby: [],
  offerReviews: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  activeCity: CITIES[0],
  activeSort: SORT_ITEMS[0],
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadOfferReviews, (state, action) => {
      state.offerReviews = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
