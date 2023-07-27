import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../constants';
import { changeActiveCity } from './action';
import { AppProcess } from '../types';

const initialState: AppProcess = {
  activeCity: CITIES[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeActiveCity, (state, action) => {
    const { activeCity } = action.payload;
    state.activeCity = activeCity;
  });
});

export { reducer };
