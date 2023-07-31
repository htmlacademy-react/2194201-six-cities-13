import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SORT_ITEMS } from '../constants';
import { changeActiveCity, changeActiveSort } from './action';
import { AppProcess } from '../types';
import { CardList } from '../mocks/offers';

const initialState: AppProcess = {
  activeCity: CITIES[0],
  offers: CardList,
  activeSort: SORT_ITEMS[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeActiveSort, (state, action) => {
      state.activeSort = action.payload;
    });
});

export { reducer };
