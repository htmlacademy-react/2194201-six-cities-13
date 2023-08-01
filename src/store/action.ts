import { createAction } from '@reduxjs/toolkit';
import { CityNames, SortNames, State } from '../types';

const changeActiveCity = createAction<CityNames>('offers/changeActiveCity');
const changeActiveSort = createAction<SortNames>('offers/changeActiveSort');
const selectActiveCity = (state: State): CityNames => state.activeCity;
const getOffers = (state: State) => state.offers;
const selectActiveSort = (state: State) => state.activeSort;

export {
  changeActiveCity,
  changeActiveSort,
  selectActiveCity,
  getOffers,
  selectActiveSort,
};
