import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../constants';
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
  statusAll: string;
  statusOffer: string;
};

const initialState: OffersData = {
  offers: [],
  activeOffer: null,
  offersNearby: [],
  statusAll: Status.Unknown,
  statusOffer: Status.Unknown,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.statusAll = Status.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.statusAll = Status.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.statusAll = Status.Error;
      })
      .addCase(fetchActiveOfferAction.pending, (state) => {
        state.statusOffer = Status.Loading;
      })
      .addCase(fetchActiveOfferAction.fulfilled, (state, action) => {
        state.activeOffer = action.payload;
        state.statusOffer = Status.Success;
      })
      .addCase(fetchActiveOfferAction.rejected, (state) => {
        state.statusOffer = Status.Error;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      });
  },
});
