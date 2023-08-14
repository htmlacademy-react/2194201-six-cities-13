import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { Card, CityNames, State } from '../../types';
import { selectActiveCity } from '../app-process/selectors';

const selectOffers = (state: Pick<State, typeof NameSpace.Offers>) =>
  state[NameSpace.Offers].offers;
const selectActiveOffer = (state: Pick<State, typeof NameSpace.Offers>) =>
  state[NameSpace.Offers].activeOffer;
const selectOffersNearby = (state: Pick<State, typeof NameSpace.Offers>) =>
  state[NameSpace.Offers].offersNearby;
const selectStatusAll = (state: Pick<State, typeof NameSpace.Offers>) =>
  state[NameSpace.Offers].statusAll;
const selectStatusOffer = (state: Pick<State, typeof NameSpace.Offers>) =>
  state[NameSpace.Offers].statusOffer;

const selectCurrentOffers = createSelector(
  selectOffers,
  selectActiveCity,
  (offers: Card[], activeCity: CityNames): Card[] =>
    offers.filter(({ city }) => activeCity === city.name)
);

export {
  selectOffers,
  selectActiveOffer,
  selectOffersNearby,
  selectStatusAll,
  selectStatusOffer,
  selectCurrentOffers,
};
