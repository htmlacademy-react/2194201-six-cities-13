import { createAction } from '@reduxjs/toolkit';
import { CityNames, State } from '../types';

const changeActiveCity = createAction<{ activeCity: CityNames }>(
  'changeActiveCity'
);
const getActiveCity = (state: State): CityNames => state.activeCity;

export { changeActiveCity, getActiveCity };
