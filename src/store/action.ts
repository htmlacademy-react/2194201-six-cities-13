import { createAction } from '@reduxjs/toolkit';
import {
  Card,
  CityNames,
  SortNames,
  State,
  AuthorizationStatuses,
} from '../types';

const loadOffers = createAction<Card[]>('offers/fetch');
const requireAuthorization = createAction<AuthorizationStatuses>(
  'user/requireAuthorization'
);
const changeActiveCity = createAction<CityNames>('offers/changeActiveCity');
const changeActiveSort = createAction<SortNames>('offers/changeActiveSort');
const setOffersLoadingStatus = createAction<boolean>(
  'data/setOffersLoadingStatus'
);
const setError = createAction<string | null>('app/setError');
const selectActiveCity = (state: State): CityNames => state.activeCity;
const getOffers = (state: State) => state.offers;
const selectActiveSort = (state: State) => state.activeSort;

export {
  loadOffers,
  requireAuthorization,
  changeActiveCity,
  changeActiveSort,
  setOffersLoadingStatus,
  setError,
  selectActiveCity,
  getOffers,
  selectActiveSort,
};
