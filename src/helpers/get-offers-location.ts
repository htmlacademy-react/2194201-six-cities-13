import { Card } from '../types';

const getOffersLocation = (offers: Card[]) =>
  offers.map((offer) => ({
    id: offer.id,
    location: offer.location,
  }));

export { getOffersLocation };
