import { Card, OfferCard } from '../types';

const changeOffersFavorite = (
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

export { changeOffersFavorite };
