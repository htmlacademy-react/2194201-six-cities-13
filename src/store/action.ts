import { createAction } from '@reduxjs/toolkit';
import { CityNames, SortNames, State } from '../types';

const changeActiveCity = createAction<CityNames>('offers/changeActiveCity');
const changeActiveSort = createAction<SortNames>('offers/changeActiveSort');
const getActiveCity = (state: State): CityNames => state.activeCity;
const getOffers = (state: State) => state.offers;
const getActiveSort = (state: State) => state.activeSort;

export {
  changeActiveCity,
  changeActiveSort,
  getActiveCity,
  getOffers,
  getActiveSort,
};
