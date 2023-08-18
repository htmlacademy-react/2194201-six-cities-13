import { LocationMap } from '../types';
import { makeFakeOffers } from '../utils/mocks/offers';
import { getOffersLocation } from './get-offers-location';

describe('Function: getOffersLocation', () => {
  const mockOffers = makeFakeOffers({
    id: 'df6df5646dfd5gskl',
    location: {
      latitude: 51.5464,
      longitude: 39.455,
      zoom: 17,
    },
  } as LocationMap);

  it('Return an array with {id, location} objects for map is correct', () => {
    const expectedLocation = {
      id: 'df6df5646dfd5gskl',
      location: {
        latitude: 51.5464,
        longitude: 39.455,
        zoom: 17,
      },
    } as LocationMap;
    const result = getOffersLocation(mockOffers);

    result.map((offer) => {
      expect(offer).toEqual(expectedLocation);
    });
  });

  it('Return an array with {id, location} objects for map is incorrect', () => {
    const expectedLocation = {
      id: 'unknown',
      location: {
        latitude: 165,
        longitude: 652,
        zoom: 5,
      },
    } as LocationMap;
    const result = getOffersLocation(mockOffers);

    result.map((offer) => {
      expect(offer).not.toEqual(expectedLocation);
    });
  });
});
