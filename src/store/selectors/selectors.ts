import { State } from '../../types';

const selectUserEmail = (state: State) => state.user;
const selectOffers = (state: State) => state.offers;
const selectActiveOffer = (state: State) => state.activeOffer;
const selectOffersNearby = (state: State) => state.offersNearby;
const selectOfferReviews = (state: State) => state.offerReviews;
const isOffersLoading = (state: State) => state.isOffersLoading;
const selectErrorMessage = (state: State) => state.error;

export {
  selectUserEmail,
  selectOffers,
  selectActiveOffer,
  selectOffersNearby,
  selectOfferReviews,
  isOffersLoading,
  selectErrorMessage,
};
