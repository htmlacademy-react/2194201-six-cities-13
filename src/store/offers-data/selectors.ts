import { NameSpace } from '../../constants';
import { Card, OfferCard, State } from '../../types';

const selectOffers = (state: State): Card[] => state[NameSpace.Offers].offers;
const selectActiveOffer = (state: State): OfferCard | null =>
  state[NameSpace.Offers].activeOffer;
const selectOffersNearby = (state: State): OfferCard[] =>
  state[NameSpace.Offers].offersNearby;
const isOffersLoading = (state: State): boolean =>
  state[NameSpace.Offers].isOffersLoading;
const selectErrorMessage = (state: State) => state[NameSpace.Offers].error;

export {
  selectOffers,
  selectActiveOffer,
  selectOffersNearby,
  isOffersLoading,
  selectErrorMessage,
};
