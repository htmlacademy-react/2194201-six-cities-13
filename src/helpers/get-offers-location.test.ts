import { makeFakeOffers } from '../utils/mocks/offers';
import { getOffersLocation } from './get-offers-location';

describe('Function: getOffersLocation', () => {
  const mockOffers = makeFakeOffers();

  it('Return an array with {id, location} objects for map is correct', () => {
    const result = getOffersLocation(mockOffers);

    result.map((offer) => {
      expect(offer).toHaveProperty('id');
      expect(offer).toHaveProperty('location');
      expect(offer.location).toHaveProperty('latitude');
      expect(offer.location).toHaveProperty('longitude');
      expect(offer.location).toHaveProperty('zoom');
      expect(Object.keys(offer).length).toBe(2);
    });
  });
});
