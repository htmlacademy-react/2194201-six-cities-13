import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { Card, CityNames, OfferCard, State } from '../../types';
import { selectActiveCity } from '../app-process/selectors';

const selectOffers = (state: State): Card[] => state[NameSpace.Offers].offers;
const selectActiveOffer = (state: State): OfferCard | null =>
  state[NameSpace.Offers].activeOffer;
const selectOffersNearby = (state: State): OfferCard[] =>
  state[NameSpace.Offers].offersNearby;
const selectStatusAll = (state: State): string =>
  state[NameSpace.Offers].statusAll;
const selectStatusOffer = (state: State): string =>
  state[NameSpace.Offers].statusOffer;

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
