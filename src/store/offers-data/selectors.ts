import { NameSpace } from '../../constants';
import { Card, OfferCard, State } from '../../types';

const selectOffers = (state: State): Card[] => state[NameSpace.Offers].offers;
const selectActiveOffer = (state: State): OfferCard | null =>
  state[NameSpace.Offers].activeOffer;
const selectOffersNearby = (state: State): OfferCard[] =>
  state[NameSpace.Offers].offersNearby;
const selectStatusAll = (state: State): string =>
  state[NameSpace.Offers].statusAll;
const selectStatusOffer = (state: State): string =>
  state[NameSpace.Offers].statusOffer;

export {
  selectOffers,
  selectActiveOffer,
  selectOffersNearby,
  selectStatusAll,
  selectStatusOffer,
};
