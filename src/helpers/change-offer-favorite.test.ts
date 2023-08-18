import { Card, OfferCard } from '../types';
import { makeFakeActiveOffer } from '../utils/mocks/active-offer';
import { makeFakeOffers } from '../utils/mocks/offers';
import { changeOffersFavorite } from './change-offer-favorite';

describe('Function: changeOffersFavorite', () => {
  const offerId = 'adj4ag4k6a4jk6da8';

  let mockOffers: Card[];
  let mockActiveOffer: OfferCard | null;
  let mockFavoriteOffer: OfferCard;

  beforeEach(() => {
    mockOffers = makeFakeOffers({
      id: offerId,
      isFavorite: false,
    });
    mockActiveOffer = makeFakeActiveOffer({
      id: offerId,
      isFavorite: false,
    });
    mockFavoriteOffer = makeFakeActiveOffer({
      id: offerId,
      isFavorite: true,
    });
  });

  it('The expected offer ID matches at least one element of the array', () => {
    changeOffersFavorite(mockOffers, mockActiveOffer, mockFavoriteOffer);

    const result = mockOffers.find((offer) => offer.id === offerId);

    expect(result).toHaveProperty('id', offerId);
  });

  it('The selected offer in the array must have the property "isFavorite: true"', () => {
    changeOffersFavorite(mockOffers, mockActiveOffer, mockFavoriteOffer);

    const result = mockOffers.find((offer) => offer.id === offerId);

    expect(result).toHaveProperty('isFavorite', true);
  });

  it('The active offer must have the "isFavorite: true" property', () => {
    changeOffersFavorite(mockOffers, mockActiveOffer, mockFavoriteOffer);

    const result = mockActiveOffer;

    expect(result).toHaveProperty('isFavorite', true);
  });
});
