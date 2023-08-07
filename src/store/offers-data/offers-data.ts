import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { Card, OfferCard } from '../../types';
import {
  fetchOffersAction,
  fetchActiveOfferAction,
  fetchOffersNearbyAction,
} from '../api-actions';

type OffersData = {
  offers: Card[];
  activeOffer: OfferCard | null;
  offersNearby: OfferCard[];
  isOffersLoading: boolean;
  error: string | null;
};

const initialState: OffersData = {
  offers: [],
  activeOffer: null,
  offersNearby: [],
  isOffersLoading: false,
  error: null,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(fetchActiveOfferAction.fulfilled, (state, action) => {
        state.activeOffer = action.payload;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(setOffersLoadingStatus, (state, action) => {
        state.isOffersLoading = action.payload;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      });
  },
});
