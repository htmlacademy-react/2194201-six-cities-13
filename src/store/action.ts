import { createAction } from '@reduxjs/toolkit';
import { CityNames, State } from '../types';

const changeActiveCity = createAction<{ activeCity: CityNames }>(
  'offers/changeActiveCity'
);
const getActiveCity = (state: State): CityNames => state.activeCity;

const getOffers = (state: State) => state.currentOffers;

export { changeActiveCity, getActiveCity, getOffers };
