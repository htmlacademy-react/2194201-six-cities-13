import { State, CityNames } from '../../types';

const selectAuthStatus = (state: State) => state.authorizationStatus;
const selectUserEmail = (state: State) => state.user;
const selectActiveCity = (state: State): CityNames => state.activeCity;
const selectOffers = (state: State) => state.offers;
const selectActiveSort = (state: State) => state.activeSort;
const selectActiveOffer = (state: State) => state.activeOffer;
const selectOffersNearby = (state: State) => state.offersNearby;
const selectOfferReviews = (state: State) => state.offerReviews;
const isOffersLoading = (state: State) => state.isOffersLoading;
const selectErrorMessage = (state: State) => state.error;

export {
  selectAuthStatus,
  selectUserEmail,
  selectActiveCity,
  selectOffers,
  selectActiveSort,
  selectActiveOffer,
  selectOffersNearby,
  selectOfferReviews,
  isOffersLoading,
  selectErrorMessage,
};
