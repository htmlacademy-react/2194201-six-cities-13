import { createAction } from '@reduxjs/toolkit';
import {
  Card,
  CityNames,
  SortNames,
  State,
  AuthorizationStatuses,
  AppRoutes,
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
const setUserEmail = createAction<string | null>('user/setUserEmail');
const setError = createAction<string | null>('app/setError');
const redirectToRoute = createAction<AppRoutes>('app/redirectToRoute');
const getAuthStatus = (state: State) => state.authorizationStatus;
const getUserEmail = (state: State) => state.user;
const selectActiveCity = (state: State): CityNames => state.activeCity;
const getOffers = (state: State) => state.offers;
const selectActiveSort = (state: State) => state.activeSort;

export {
  loadOffers,
  requireAuthorization,
  changeActiveCity,
  changeActiveSort,
  setOffersLoadingStatus,
  setUserEmail,
  setError,
  redirectToRoute,
  getAuthStatus,
  getUserEmail,
  selectActiveCity,
  getOffers,
  selectActiveSort,
};
