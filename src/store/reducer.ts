import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../constants';
import { changeActiveCity, setCurrentOffers } from './action';
import { AppProcess } from '../types';

const initialState: AppProcess = {
  activeCity: CITIES[0],
  currentOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      const { activeCity } = action.payload;
      state.activeCity = activeCity;
    })
    .addCase(setCurrentOffers, (state, action) => {
      const { cardList, activeCity } = action.payload;
      state.currentOffers = cardList.filter(
        ({ city }) => activeCity === city.name
      );
    });
});

export { reducer };
