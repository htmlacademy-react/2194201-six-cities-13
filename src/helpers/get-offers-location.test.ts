import { makeFakeOffers } from '../utils/mocks/offers';
import { getOffersLocation } from './get-offers-location';

describe('Function: getOffersLocation', () => {
  it('Return an array with {id, location} objects', () => {
    const mockOffers = makeFakeOffers();
    const offersLocation = mockOffers.map((offer) => ({
      id: offer.id,
      location: offer.location,
    }));

    const result = getOffersLocation(mockOffers);

    expect(result).toStrictEqual(offersLocation);
  });
});
