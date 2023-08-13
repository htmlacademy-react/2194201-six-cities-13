import { makeFakeOffers } from '../utils/mocks/offers';
import { getOffersLocation } from './get-offers-location';

describe('Function: getOffersLocation', () => {
  const mockOffers = makeFakeOffers();

  it('Return an array with {id, location} objects for map is correct', () => {
    const offersLocation = mockOffers.map((offer) => ({
      id: offer.id,
      location: offer.location,
    }));
    const result = getOffersLocation(mockOffers);

    expect(result).toEqual(offersLocation);
  });

  it('Return an array with {id, location} objects for map is incorrect', () => {
    const offersLocation = mockOffers.map(() => ({
      id: 'unknown',
      location: 'unknown',
    }));
    const result = getOffersLocation(mockOffers);

    expect(result).not.toStrictEqual(offersLocation);
  });
});
