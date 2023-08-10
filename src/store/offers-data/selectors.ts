import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { Card, CityNames, State } from '../../types';
import { selectActiveCity } from '../app-process/selectors';

const selectOffers = (state: State) => state[NameSpace.Offers].offers;
const selectActiveOffer = (state: State) => state[NameSpace.Offers].activeOffer;
const selectOffersNearby = (state: State) =>
  state[NameSpace.Offers].offersNearby;
const selectStatusAll = (state: State) => state[NameSpace.Offers].statusAll;
const selectStatusOffer = (state: State) => state[NameSpace.Offers].statusOffer;

const selectCurrentOffers = createSelector(
  [selectOffers, selectActiveCity],
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
