import { Card, OfferCard } from '../types';
import { makeFakeActiveOffer } from '../utils/mocks/active-offer';
import { makeFakeOffers } from '../utils/mocks/offers';
import { changeOffersFavorite } from './change-offer-favorite';

const checkOffersFavorite = (
  offers: Card[],
  activeOffer: OfferCard | null,
  favoriteOffer: OfferCard
) => {
  offers.map((offer) => {
    if (offer.id === favoriteOffer.id) {
      offer.isFavorite = favoriteOffer.isFavorite;
    }
  });

  if (activeOffer && activeOffer.isFavorite !== favoriteOffer.isFavorite) {
    activeOffer.isFavorite = favoriteOffer.isFavorite;
  }
};

describe('Function: changeOffersFavorite', () => {
  const mockOffers = makeFakeOffers();
  const mockActiveOffer = makeFakeActiveOffer();
  const mockFavoriteOffer = makeFakeActiveOffer();

  it('Return an array with {id, location} objects for map is correct', () => {
    const expectedOffers = checkOffersFavorite(
      mockOffers,
      mockActiveOffer,
      mockFavoriteOffer
    );
    const result = changeOffersFavorite(
      mockOffers,
      mockActiveOffer,
      mockFavoriteOffer
    );

    expect(result).toEqual(expectedOffers);
  });
});
