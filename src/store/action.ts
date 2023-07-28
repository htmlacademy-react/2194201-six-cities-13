import { createAction } from '@reduxjs/toolkit';
import { Card, CityNames, State } from '../types';

const changeActiveCity = createAction<{ activeCity: CityNames }>(
  'offers/changeActiveCity'
);
const getActiveCity = (state: State): CityNames => state.activeCity;

const setCurrentOffers = createAction<{
  cardList: Card[];
  activeCity: CityNames;
}>('offers/setCurrentOffers');
const getOffers = (state: State) => state.currentOffers;

export { changeActiveCity, getActiveCity, setCurrentOffers, getOffers };
