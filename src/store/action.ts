import { createAction } from '@reduxjs/toolkit';
import { CityNames, SortNames, State } from '../types';

const changeActiveCity = createAction<{ activeCity: CityNames }>(
  'offers/changeActiveCity'
);
const changeActiveSort = createAction<{ activeSort: SortNames }>(
  'offers/changeActiveSort'
);
const getActiveCity = (state: State): CityNames => state.activeCity;
const getOffers = (state: State) => state.currentOffers;
const getActiveSort = (state: State) => state.activeSort;

export {
  changeActiveCity,
  changeActiveSort,
  getActiveCity,
  getOffers,
  getActiveSort,
};
