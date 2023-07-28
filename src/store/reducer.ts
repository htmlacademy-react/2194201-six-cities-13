import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SORT_ITEMS } from '../constants';
import { changeActiveCity, changeActiveSort } from './action';
import { AppProcess } from '../types';
import { CardList } from '../mocks/offers';

const initialState: AppProcess = {
  activeCity: CITIES[0],
  currentOffers: CardList,
  activeSort: SORT_ITEMS[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      const { activeCity } = action.payload;
      state.activeCity = activeCity;
    })
    .addCase(changeActiveSort, (state, action) => {
      const { activeSort } = action.payload;
      state.activeSort = activeSort;
    });
});

export { reducer };
